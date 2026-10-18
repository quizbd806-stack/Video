// Cloudflare Worker for Telegram Bot
// এই কোডটির জন্য Environment Variables প্রয়োজন: BOT_TOKEN, MINI_APP_URL, SUPABASE_URL, SUPABASE_SERVICE_KEY

const ADMIN_ID = 7609414654; // আপনার অ্যাডমিন Telegram ID

export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      try {
        const update = await request.json();
        if (update.message) return handleMessage(update.message, env);
        if (update.callback_query) return handleCallback(update.callback_query, env);
      } catch (e) {
        console.error("Error parsing update:", e);
      }
      return new Response("OK", { status: 200 });
    }
    return new Response("Bot is running perfectly!", { status: 200 });
  }
};

// ==========================================
// 1. মেসেজ হ্যান্ডলার (/start, /stats ইত্যাদি)
// ==========================================
async function handleMessage(msg, env) {
  const chatId = msg.chat.id;
  const text = msg.text || "";
  const userId = msg.from.id;
  const firstName = msg.from.first_name || "User";

  // /start কমান্ড
  if (text.startsWith("/start")) {
    const startParam = text.split(" ")[1] || "";
    let appLink = env.MINI_APP_URL;
    
    // রেফারেল লিংক থাকলে (?startapp=ref_xxx)
    if (startParam.startsWith("ref_")) {
      appLink += `?startapp=${startParam}`;
    }

    return sendMessage(env, chatId, 
      `🎬 *TurkFlix BD*\n\n` +
      `স্বাগতম ${firstName}!\n\n` +
      `💰 ভিডিও দেখুন, কয়েন আয় করুন\n` +
      `🎁 নতুন ইউজার বোনাস: ২০০০ কয়েন\n` +
      `💸 ১০০০ কয়েন = ১ টাকা (মিনিমাম উইথড্র ১০০০ কয়েন)\n\n` +
      `নিচের বাটনে ক্লিক করে অ্যাপ খুলুন 👇`,
      { 
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [[ { text: "🎬 Open Mini App", web_app: { url: appLink } } ]]
        }
      }
    );
  }

  // অ্যাডমিন কমান্ডসমূহ
  if (userId === ADMIN_ID) {
    if (text.startsWith("/stats")) {
      const stats = await getStats(env);
      return sendMessage(env, chatId, 
        `📊 *Statistics*\n\n` +
        `👥 Total Users: ${stats.users}\n` +
        `📹 Total Videos: ${stats.videos}\n` +
        `⏳ Pending Videos: ${stats.pendingVideos}\n` +
        `🪙 Total Coins: ${stats.coins}\n` +
        `💸 Pending Withdrawals: ${stats.pendingWithdrawals}`,
        { parse_mode: "Markdown" }
      );
    }
    
    if (text.startsWith("/pending")) {
      const videos = await getPendingVideos(env);
      if (!videos.length) return sendMessage(env, chatId, "✅ কোনো Pending ভিডিও নেই।");
      
      for (const v of videos) {
        await sendMessage(env, chatId,
          `📹 *${v.title}*\nCategory: ${v.category}\nDate: ${new Date(v.created_at).toLocaleString('bn')}`,
          { 
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: [[
              { text: "✅ Approve", callback_data: `approve_${v.id}` },
              { text: "❌ Reject", callback_data: `reject_${v.id}` }
            ]]}
          }
        );
      }
      return new Response("OK");
    }

    if (text.startsWith("/withdrawals")) {
      const wds = await getPendingWithdrawals(env);
      if (!wds.length) return sendMessage(env, chatId, "✅ কোনো Pending উইথড্রয়াল নেই।");
      
      for (const w of wds) {
        await sendMessage(env, chatId,
          `💸 *Withdrawal Request*\n` +
          `User: ${w.users?.first_name || 'User'} (${w.users?.telegram_id})\n` +
          `Amount: ${w.coins_amount} coins = ৳${w.bdt_amount}\n` +
          `Method: ${w.payment_method}\n` +
          `Number: ${w.payment_number}`,
          { 
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: [[
              { text: "✅ Complete", callback_data: `wd_complete_${w.id}` },
              { text: "❌ Reject & Refund", callback_data: `wd_reject_${w.id}` }
            ]]}
          }
        );
      }
      return new Response("OK");
    }
  }

  return new Response("OK");
}

// ==========================================
// 2. বাটন ক্লিক (Callback) হ্যান্ডলার
// ==========================================
async function handleCallback(cq, env) {
  const userId = cq.from.id;
  if (userId !== ADMIN_ID) {
    return answerCallback(env, cq.id, "আপনি অ্যাডমিন নন!", true);
  }

  const data = cq.data;
  const [action, id] = data.split("_");

  if (action === "approve") {
    await updateSupabase(env, `videos?id=eq.${id}`, "PATCH", { 
      status: "approved", 
      published_at: new Date().toISOString() 
    });
    await answerCallback(env, cq.id, "✅ ভিডিও অ্যাপ্রুভ করা হয়েছে।");
  } 
  else if (action === "reject") {
    await updateSupabase(env, `videos?id=eq.${id}`, "PATCH", { status: "rejected" });
    await answerCallback(env, cq.id, "❌ ভিডিও রিজেক্ট করা হয়েছে।");
  }
  else if (action === "wd") {
    const subAction = cq.data.split("_")[1]; // complete or reject
    const wdId = cq.data.split("_")[2];

    if (subAction === "complete") {
      await updateSupabase(env, `withdrawals?id=eq.${wdId}`, "PATCH", { 
        status: "completed", 
        processed_at: new Date().toISOString() 
      });
      await answerCallback(env, cq.id, "✅ উইথড্রয়াল সম্পন্ন হয়েছে।");
    } else if (subAction === "reject") {
      // রিফান্ড লজিক (এখানে সরাসরি Supabase RPC কল করা হচ্ছে)
      await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/admin_adjust_coins`, {
        method: "POST",
        headers: {
          "apikey": env.SUPABASE_SERVICE_KEY,
          "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          p_admin_tg: ADMIN_ID,
          p_target_tg: cq.message.text.match(/\((\d+)\)/)[1], // টেক্সট থেকে User ID বের করা
          p_amount: parseInt(cq.message.text.match(/Amount: (\d+)/)[1]), // টেক্সট থেকে কয়েন বের করা
          p_reason: "Withdrawal rejected - refund"
        })
      });

      await updateSupabase(env, `withdrawals?id=eq.${wdId}`, "PATCH", { 
        status: "rejected", 
        processed_at: new Date().toISOString() 
      });
      await answerCallback(env, cq.id, "❌ উইথড্রয়াল রিজেক্ট ও রিফান্ড করা হয়েছে।");
    }
  }

  return new Response("OK");
}

// ==========================================
// 3. হেল্পার ফাংশনসমূহ
// ==========================================
async function sendMessage(env, chatId, text, opts = {}) {
  return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, ...opts })
  });
}

async function answerCallback(env, callbackId, text, showAlert = false) {
  return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/answerCallbackQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callback_query_id: callbackId, text, show_alert: showAlert })
  });
}

async function updateSupabase(env, path, method, body) {
  return fetch(`${env.SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      "apikey": env.SUPABASE_SERVICE_KEY,
      "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(body)
  });
}

async function getStats(env) {
  const fetchCount = async (table, query = "") => {
    const res = await fetch(`${env.SUPABASE_URL}/rest/v1/${table}?select=id${query}`, {
      headers: { 
        "apikey": env.SUPABASE_SERVICE_KEY, 
        "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`,
        "Prefer": "count=exact"
      }
    });
    return res.headers.get('content-range')?.split('/')[1] || 0;
  };

  const [users, videos, pendingVideos, pendingWithdrawals] = await Promise.all([
    fetchCount('users'),
    fetchCount('videos'),
    fetchCount('videos', '&status=eq.pending'),
    fetchCount('withdrawals', '&status=eq.pending')
  ]);

  // মোট কয়েন বের করা
  const coinsRes = await fetch(`${env.SUPABASE_URL}/rest/v1/coin_wallets?select=balance`, {
    headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` }
  });
  const wallets = await coinsRes.json();
  const totalCoins = wallets.reduce((sum, w) => sum + (w.balance || 0), 0);

  return { users, videos, pendingVideos, coins: totalCoins, pendingWithdrawals };
}

async function getPendingVideos(env) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/videos?status=eq.pending&select=id,title,created_at,video_categories(name)`, {
    headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` }
  });
  const data = await res.json();
  return data.map(v => ({ ...v, category: v.video_categories?.name || 'General' }));
}

async function getPendingWithdrawals(env) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/withdrawals?status=eq.pending&select=*,users(first_name,telegram_id)`, {
    headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` }
  });
  return await res.json();
}