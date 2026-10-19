const ADMIN_ID = 7609414654;
const GROUPS_TO_POST = ['-1003978284561', '-1003624299160']; // আপনার গ্রুপ ও চ্যানেলের আইডি

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // ১. গ্রুপ ও চ্যানেল মেম্বারশিপ চেক API
    if (url.pathname === '/verify-groups' && request.method === 'POST') {
      const { userId } = await request.json();
      let allJoined = true;
      let errorDetails = [];

      for (const chatId of GROUPS_TO_POST) {
        const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/getChatMember?chat_id=${chatId}&user_id=${userId}`);
        const data = await res.json();
        
        if (!data.ok || !['creator', 'administrator', 'member'].includes(data.result.status)) {
          allJoined = false;
          errorDetails.push(`Chat ${chatId}: ${data.description || 'Not joined'}`);
        }
      }
      return new Response(JSON.stringify({ joined: allJoined, errors: errorDetails }), { 
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } 
      });
    }

    // ২. অটো-পোস্ট API
    if (url.pathname === '/auto-post' && request.method === 'POST') {
      const { videoId, title, thumbnail_url, youtube_id } = await request.json();
      const appLink = `${env.MINI_APP_URL}?startapp=video_${videoId}`;
      const thumb = thumbnail_url || (youtube_id ? `https://img.youtube.com/vi/${youtube_id}/hqdefault.jpg` : null);
      
      const caption = `🎬 <b>${title}</b>\n\n💰 ভিডিও দেখুন, কয়েন আয় করুন!\n👇 নিচের বাটনে ক্লিক করে অ্যাপে ঢুকুন`;
      let postResults = [];

      for (const chatId of GROUPS_TO_POST) {
        let res;
        try {
          if (thumb) {
            res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendPhoto`, {
              method: "POST", headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: chatId, photo: thumb, caption: caption, parse_mode: "HTML",
                reply_markup: { inline_keyboard: [[ { text: "🎬 Watch & Earn Coins", web_app: { url: appLink } } ]] }
              })
            });
          } else {
            res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
              method: "POST", headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: chatId, text: caption, parse_mode: "HTML",
                reply_markup: { inline_keyboard: [[ { text: "🎬 Watch & Earn Coins", web_app: { url: appLink } } ]] }
              })
            });
          }
          const resData = await res.json();
          postResults.push({ chatId, success: resData.ok, error: resData.description });
        } catch (e) {
          postResults.push({ chatId, success: false, error: e.message });
        }
      }
      return new Response(JSON.stringify({ status: "done", results: postResults }), { 
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } 
      });
    }

    // ৩. বটের সাধারণ মেসেজ হ্যান্ডলার
    if (request.method === "POST") {
      try {
        const update = await request.json();
        if (update.message) return handleMessage(update.message, env);
        if (update.callback_query) return handleCallback(update.callback_query, env);
      } catch (e) { console.error("Error parsing update:", e); }
      return new Response("OK", { status: 200 });
    }
    return new Response("Bot is running perfectly!", { status: 200 });
  }
};

async function handleMessage(msg, env) {
  const chatId = msg.chat.id;
  const text = msg.text || "";
  const userId = msg.from.id;
  const firstName = msg.from.first_name || "User";

  if (text.startsWith("/start")) {
    const startParam = text.split(" ")[1] || "";
    let appLink = env.MINI_APP_URL;
    if (startParam.startsWith("ref_")) appLink += `?startapp=${startParam}`;

    return sendMessage(env, chatId, 
      `🎬 *TurkFlix BD*\n\nস্বাগতম ${firstName}!\n\n💰 ভিডিও দেখুন, কয়েন আয় করুন\n🎁 নতুন ইউজার বোনাস: ২০০০ কয়েন\n💸 ১০০০ কয়েন = ১ টাকা (মিনিমাম উইথড্র ২০০ টাকা)\n\nনিচের বাটনে ক্লিক করে অ্যাপ খুলুন 👇`,
      { parse_mode: "Markdown", reply_markup: { inline_keyboard: [[ { text: "🎬 Open Mini App", web_app: { url: appLink } } ]] } }
    );
  }

  if (userId === ADMIN_ID) {
    if (text.startsWith("/stats")) {
      const stats = await getStats(env);
      return sendMessage(env, chatId, 
        `📊 *Statistics*\n\n👥 Users: ${stats.users}\n📹 Videos: ${stats.videos}\n⏳ Pending: ${stats.pendingVideos}\n🪙 Coins: ${stats.coins}\n💸 Withdrawals: ${stats.pendingWithdrawals}`,
        { parse_mode: "Markdown" }
      );
    }
    if (text.startsWith("/pending")) {
      const videos = await getPendingVideos(env);
      if (!videos.length) return sendMessage(env, chatId, "✅ কোনো Pending ভিডিও নেই।");
      for (const v of videos) {
        await sendMessage(env, chatId, `📹 *${v.title}*\nCategory: ${v.category}\nDate: ${new Date(v.created_at).toLocaleString('bn')}`,
          { parse_mode: "Markdown", reply_markup: { inline_keyboard: [[ { text: "✅ Approve", callback_data: `approve_${v.id}` }, { text: "❌ Reject", callback_data: `reject_${v.id}` } ]] } }
        );
      }
      return new Response("OK");
    }
    if (text.startsWith("/withdrawals")) {
      const wds = await getPendingWithdrawals(env);
      if (!wds.length) return sendMessage(env, chatId, "✅ কোনো Pending উইথড্রয়াল নেই।");
      for (const w of wds) {
        await sendMessage(env, chatId, `💸 *Withdrawal Request*\nUser: ${w.users?.first_name || 'User'} (${w.users?.telegram_id})\nAmount: ${w.coins_amount} coins = ৳${w.bdt_amount}\nMethod: ${w.payment_method}\nNumber: ${w.payment_number}`,
          { parse_mode: "Markdown", reply_markup: { inline_keyboard: [[ { text: "✅ Complete", callback_data: `wd_complete_${w.id}` }, { text: "❌ Reject & Refund", callback_data: `wd_reject_${w.id}` } ]] } }
        );
      }
      return new Response("OK");
    }
  }
  return new Response("OK");
}

async function handleCallback(cq, env) {
  const userId = cq.from.id;
  if (userId !== ADMIN_ID) return answerCallback(env, cq.id, "আপনি অ্যাডমিন নন!", true);
  const data = cq.data; const [action, id] = data.split("_");

  if (action === "approve") {
    await updateSupabase(env, `videos?id=eq.${id}`, "PATCH", { status: "approved", published_at: new Date().toISOString() });
    await answerCallback(env, cq.id, "✅ ভিডিও অ্যাপ্রুভ করা হয়েছে।");
  } 
  else if (action === "reject") {
    await updateSupabase(env, `videos?id=eq.${id}`, "PATCH", { status: "rejected" });
    await answerCallback(env, cq.id, "❌ ভিডিও রিজেক্ট করা হয়েছে।");
  }
  else if (action === "wd") {
    const subAction = cq.data.split("_")[1]; const wdId = cq.data.split("_")[2];
    if (subAction === "complete") {
      await updateSupabase(env, `withdrawals?id=eq.${wdId}`, "PATCH", { status: "completed", processed_at: new Date().toISOString() });
      await answerCallback(env, cq.id, "✅ উইথড্রয়াল সম্পন্ন হয়েছে।");
    } else if (subAction === "reject") {
      await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/admin_adjust_coins`, {
        method: "POST", headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ p_admin_tg: ADMIN_ID, p_target_tg: cq.message.text.match(/\((\d+)\)/)[1], p_amount: parseInt(cq.message.text.match(/Amount: (\d+)/)[1]), p_reason: "Withdrawal rejected - refund" })
      });
      await updateSupabase(env, `withdrawals?id=eq.${wdId}`, "PATCH", { status: "rejected", processed_at: new Date().toISOString() });
      await answerCallback(env, cq.id, "❌ উইথড্রয়াল রিজেক্ট ও রিফান্ড করা হয়েছে।");
    }
  }
  return new Response("OK");
}

async function sendMessage(env, chatId, text, opts = {}) { return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, text, ...opts }) }); }
async function answerCallback(env, callbackId, text, showAlert = false) { return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text, show_alert: showAlert }) }); }
async function updateSupabase(env, path, method, body) { return fetch(`${env.SUPABASE_URL}/rest/v1/${path}`, { method, headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json", "Prefer": "return=minimal" }, body: JSON.stringify(body) }); }
async function getStats(env) {
  const fetchCount = async (table, query = "") => { const res = await fetch(`${env.SUPABASE_URL}/rest/v1/${table}?select=id${query}`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Prefer": "count=exact" } }); return res.headers.get('content-range')?.split('/')[1] || 0; };
  const [users, videos, pendingVideos, pendingWithdrawals] = await Promise.all([ fetchCount('users'), fetchCount('videos'), fetchCount('videos', '&status=eq.pending'), fetchCount('withdrawals', '&status=eq.pending') ]);
  const coinsRes = await fetch(`${env.SUPABASE_URL}/rest/v1/coin_wallets?select=balance`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } });
  const wallets = await coinsRes.json(); const totalCoins = wallets.reduce((sum, w) => sum + (w.balance || 0), 0);
  return { users, videos, pendingVideos, coins: totalCoins, pendingWithdrawals };
}
async function getPendingVideos(env) { const res = await fetch(`${env.SUPABASE_URL}/rest/v1/videos?status=eq.pending&select=id,title,created_at,video_categories(name)`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } }); const data = await res.json(); return data.map(v => ({ ...v, category: v.video_categories?.name || 'General' })); }
async function getPendingWithdrawals(env) { const res = await fetch(`${env.SUPABASE_URL}/rest/v1/withdrawals?status=eq.pending&select=*,users(first_name,telegram_id)`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } }); return await res.json(); }