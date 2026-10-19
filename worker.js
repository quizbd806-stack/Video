const ADMIN_ID = 7609414654;
// ইসলামিক দুনিয়া (চ্যানেল) এবং লিংক শেয়ার গ্রুপ
const GROUPS_TO_POST = ['-1003978284561', '-1003624299160']; 

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/verify-groups' && request.method === 'POST') {
      const { userId } = await request.json();
      let allJoined = true; let errorDetails = [];
      for (const chatId of GROUPS_TO_POST) {
        const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/getChatMember?chat_id=${chatId}&user_id=${userId}`);
        const data = await res.json();
        if (!data.ok || !['creator', 'administrator', 'member'].includes(data.result.status)) {
          allJoined = false; errorDetails.push(`Chat ${chatId}: Not joined`);
        }
      }
      return new Response(JSON.stringify({ joined: allJoined, errors: errorDetails }), { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
    }

    if (url.pathname === '/auto-post' && request.method === 'POST') {
      const { videoId, title, thumbnail_url, youtube_id } = await request.json();
      
      let appLink = env.MINI_APP_URL;
      if (!appLink.includes('?')) appLink += `?startapp=video_${videoId}`;
      else appLink += `&startapp=video_${videoId}`;

      const thumb = thumbnail_url || (youtube_id ? `https://img.youtube.com/vi/${youtube_id}/hqdefault.jpg` : null);
      const caption = `🎬 <b>${title}</b>\n\n💰 ভিডিও দেখুন, কয়েন আয় করুন!\n👇 নিচের বাটনে ক্লিক করে অ্যাপে ঢুকুন`;
      let postResults = [];

      for (const chatId of GROUPS_TO_POST) {
        let res;
        try {
          const keyboard = { inline_keyboard: [[ { text: "🎬 Watch & Earn", url: appLink } ]] };
          if (thumb) {
            res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendPhoto`, {
              method: "POST", headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: chatId, photo: thumb, caption: caption, parse_mode: "HTML", reply_markup: keyboard })
            });
          } else {
            res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
              method: "POST", headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: chatId, text: caption, parse_mode: "HTML", reply_markup: keyboard })
            });
          }
          const resData = await res.json();
          postResults.push({ chatId, success: resData.ok, error: resData.description });
        } catch (e) { postResults.push({ chatId, success: false, error: e.message }); }
      }
      return new Response(JSON.stringify({ status: "done", results: postResults }), { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
    }

    if (request.method === "POST") {
      try {
        const update = await request.json();
        if (update.message) return handleMessage(update.message, env);
        if (update.callback_query) return handleCallback(update.callback_query, env);
      } catch (e) { console.error("Error:", e); }
      return new Response("OK", { status: 200 });
    }
    return new Response("Bot is running!", { status: 200 });
  }
};

async function handleMessage(msg, env) {
  const chatId = msg.chat.id;
  const text = msg.text || "";
  const userId = msg.from.id;
  const firstName = msg.from.first_name || "User";

  if (text.startsWith("/post") && userId === ADMIN_ID) {
    let appLink = env.MINI_APP_URL;
    const caption = `🎬 <b>টেস্ট মেসেজ!</b>\n\n💰 ভিডিও দেখুন, কয়েন আয় করুন!\n👇 নিচের বাটনে ক্লিক করে অ্যাপে ঢুকুন`;
    let resultMsg = "📊 *Post Results:*\n\n";
    const keyboard = { inline_keyboard: [[ { text: "🎬 Watch & Earn", url: appLink } ]] };

    for (const chatIdStr of GROUPS_TO_POST) {
      try {
        const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatIdStr, text: caption, parse_mode: "HTML", reply_markup: keyboard })
        });
        const resData = await res.json();
        if (resData.ok) resultMsg += `✅ Chat ${chatIdStr}: Success\n`;
        else resultMsg += `❌ Chat ${chatIdStr}: ${resData.description}\n`;
      } catch (e) { resultMsg += `❌ Chat ${chatIdStr}: ${e.message}\n`; }
    }
    return sendMessage(env, chatId, resultMsg, { parse_mode: "Markdown" });
  }

  if (text.startsWith("/start")) {
    const startParam = text.split(" ")[1] || "";
    let appLink = env.MINI_APP_URL;
    if (startParam.startsWith("ref_")) {
       if(!appLink.includes('?')) appLink += `?startapp=${startParam}`;
       else appLink += `&startapp=${startParam}`;
    }

    const welcomeText = `🎬 *TurkFlix BD*\n\nস্বাগতম ${firstName}!\n\n💰 ভিডিও দেখুন, কয়েন আয় করুন\n🎁 নতুন ইউজার বোনাস: ২০০০ কয়েন\n💸 ১০০০ কয়েন = ১ টাকা (মিনিমাম উইথড্র ২০০ টাকা)\n\nনিচের মেনু থেকে আপনার পছন্দের অপশন বেছে নিন 👇`;
    
    const keyboard = {
      inline_keyboard: [
        [{ text: "🎬 ভিডিও দেখুন (Videos)", callback_data: 'menu_cats' }],
        [{ text: "👤 আমার প্রোফাইল", callback_data: 'menu_profile' }, { text: "👥 রেফারেল", callback_data: 'menu_ref' }],
        [{ text: "🌐 মিনি অ্যাপে খেলুন", web_app: { url: appLink } }]
      ]
    };

    if (userId === ADMIN_ID) {
      keyboard.inline_keyboard.push([{ text: "⚙️ Admin Panel", callback_data: 'admin_menu' }]);
      keyboard.inline_keyboard.push([{ text: "📢 Test Post to Groups", callback_data: 'test_post' }]); 
    }

    return sendMessage(env, chatId, welcomeText, { parse_mode: "Markdown", reply_markup: keyboard });
  }
  return new Response("OK");
}

async function handleCallback(cq, env) {
  const chatId = cq.message.chat.id;
  const userId = cq.from.id;
  const data = cq.data;

  if (data.startsWith('approve_') || data.startsWith('reject_') || data.startsWith('wd_')) {
     return handleAdminCallback(cq, env);
  }

  if (data === 'test_post' && userId === ADMIN_ID) {
    await answerCallback(env, cq.id, "টেস্ট পোস্ট পাঠানো হচ্ছে...");
    
    let appLink = env.MINI_APP_URL;
    const caption = `🎬 <b>টেস্ট মেসেজ!</b>\n\n💰 ভিডিও দেখুন, কয়েন আয় করুন!\n👇 নিচের বাটনে ক্লিক করে অ্যাপে ঢুকুন`;
    let resultMsg = "📊 *Test Post Results:*\n\n";
    const keyboard = { inline_keyboard: [[ { text: "🎬 Watch & Earn", url: appLink } ]] };

    for (const chatIdStr of GROUPS_TO_POST) {
      try {
        const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatIdStr, text: caption, parse_mode: "HTML", reply_markup: keyboard })
        });
        const resData = await res.json();
        if (resData.ok) resultMsg += `✅ Chat ${chatIdStr}: Success\n`;
        else resultMsg += `❌ Chat ${chatIdStr}: ${resData.description}\n`;
      } catch (e) { resultMsg += `❌ Chat ${chatIdStr}: ${e.message}\n`; }
    }
    return sendMessage(env, chatId, resultMsg, { parse_mode: "Markdown" });
  }

  if (data === 'menu_cats') {
    await answerCallback(env, cq.id, "ক্যাটাগরি লোড হচ্ছে...");
    return showCategories(env, chatId, cq.message.message_id);
  }
  
  if (data === 'menu_profile') {
    await answerCallback(env, cq.id, "প্রোফাইল লোড হচ্ছে...");
    return showProfile(env, chatId, userId, cq.message.message_id);
  }
  
  if (data === 'menu_ref') {
    await answerCallback(env, cq.id, "রেফারেল লোড হচ্ছে...");
    return showReferral(env, chatId, userId, cq.message.message_id);
  }

  if (data === 'menu_back') {
    await answerCallback(env, cq.id, "মেইন মেনু");
    const appLink = env.MINI_APP_URL;
    const keyboard = {
      inline_keyboard: [
        [{ text: "🎬 ভিডিও দেখুন (Videos)", callback_data: 'menu_cats' }],
        [{ text: "👤 আমার প্রোফাইল", callback_data: 'menu_profile' }, { text: "👥 রেফারেল", callback_data: 'menu_ref' }],
        [{ text: "🌐 মিনি অ্যাপে খেলুন", web_app: { url: appLink } }]
      ]
    };
    if (userId === ADMIN_ID) {
        keyboard.inline_keyboard.push([{ text: "⚙️ Admin Panel", callback_data: 'admin_menu' }]);
        keyboard.inline_keyboard.push([{ text: "📢 Test Post to Groups", callback_data: 'test_post' }]);
    }
    return editMessage(env, chatId, cq.message.message_id, `🎬 *TurkFlix BD*\n\nস্বাগতম!\n\nনিচের মেনু থেকে অপশন বেছে নিন 👇`, { parse_mode: "Markdown", reply_markup: keyboard });
  }

  if (data.startsWith('cat_')) {
    const catId = data.split('_')[1];
    await answerCallback(env, cq.id, "ভিডিও লোড হচ্ছে...");
    return showVideosByCategory(env, chatId, catId, cq.message.message_id);
  }

  if (data.startsWith('vid_')) {
    const vidId = data.split('_')[1];
    await answerCallback(env, cq.id, "ভিডিও ওপেন হচ্ছে...");
    
    const res = await fetch(`${env.SUPABASE_URL}/rest/v1/videos?id=eq.${vidId}&select=*`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } });
    const video = (await res.json())[0];
    if (!video) return sendMessage(env, chatId, "❌ ভিডিওটি পাওয়া যায়নি।");

    let appLink = env.MINI_APP_URL;
    if (!appLink.includes('?')) appLink += `?startapp=video_${video.id}`;
    else appLink += `&startapp=video_${video.id}`;
    
    if (video.source_type === 'upload' && video.video_url) {
      return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendVideo`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            chat_id: chatId, video: video.video_url, 
            caption: `🎬 *${video.title}*`, parse_mode: "Markdown",
            reply_markup: { inline_keyboard: [[ { text: "🎬 Watch in App (Earn Coins)", web_app: { url: appLink } } ]] }
        })
      });
    } else {
      return sendMessage(env, chatId, `🎬 *${video.title}*`, {
        parse_mode: "Markdown",
        reply_markup: { inline_keyboard: [[ { text: "🎬 Watch in App (Earn Coins)", web_app: { url: appLink } } ]] }
      });
    }
  }
  return new Response("OK");
}

async function showCategories(env, chatId, editMsgId = null) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/video_categories?is_active=eq.true&select=*`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } });
  const cats = await res.json();
  let keyboard = [];
  if (cats && cats.length > 0) {
    const row = cats.map(cat => ({ text: `${cat.icon || '📁'} ${cat.name}`, callback_data: `cat_${cat.id}` }));
    for (let i = 0; i < row.length; i += 2) { keyboard.push(row.slice(i, i + 2)); }
  } else {
    keyboard.push([{ text: "কোনো ক্যাটাগরি নেই", callback_data: 'none' }]);
  }
  keyboard.push([{ text: "🔙 মেইন মেনু", callback_data: 'menu_back' }]);
  const text = `📂 *ভিডিও ক্যাটাগরি*\n\nনিচের যেকোনো একটি ক্যাটাগরিতে ক্লিক করে ভিডিও দেখুন:`;
  const opts = { parse_mode: "Markdown", reply_markup: { inline_keyboard: keyboard } };
  if (editMsgId) return editMessage(env, chatId, editMsgId, text, opts);
  return sendMessage(env, chatId, text, opts);
}

async function showVideosByCategory(env, chatId, catId, editMsgId) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/videos?category_id=eq.${catId}&status=eq.approved&select=id,title&limit=10`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } });
  const videos = await res.json();
  let keyboard = [];
  if (videos && videos.length > 0) {
    videos.forEach(v => keyboard.push([{ text: `▶️ ${v.title.substring(0, 30)}...`, callback_data: `vid_${v.id}` }]));
  } else {
    keyboard.push([{ text: "এই ক্যাটাগরিতে কোনো ভিডিও নেই", callback_data: 'none' }]);
  }
  keyboard.push([{ text: "🔙 ক্যাটাগরিতে ফিরুন", callback_data: 'menu_cats' }]);
  return editMessage(env, chatId, editMsgId, `📹 *ক্যাটাগরির ভিডিওগুলো*\n\nদেখতে চাওয়া ভিডিওতে ক্লিক করুন:`, { parse_mode: "Markdown", reply_markup: { inline_keyboard: keyboard } });
}

async function showProfile(env, chatId, userId, editMsgId = null) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/get_user_data`, { method: 'POST', headers: { 'apikey': env.SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${env.SUPABASE_SERVICE_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ p_telegram_id: userId }) });
  const user = await res.json();
  if (!user || !user.id) return sendMessage(env, chatId, "❌ আপনি এখনো অ্যাকাউন্ট খোলেননি। /start দিন।");
  const text = `👤 *আপনার প্রোফাইল*\n\n🆔 *নাম:* ${user.first_name || 'User'}\n🔗 *ইউজারনেম:* @${user.username || 'N/A'}\n\n🪙 *মোট কয়েন:* ${user.balance}\n💸 *আজকের আয়:* ${user.today_earned}\n👥 *মোট রেফারেল:* ${user.total_referrals}\n\n_(মিনি অ্যাপে গিয়ে আরও বিস্তারিত দেখতে পারবেন)_`;
  const keyboard = { inline_keyboard: [[{ text: "🌐 মিনি অ্যাপে ওপেন করুন", web_app: { url: env.MINI_APP_URL } }], [{ text: "🔙 মেইন মেনু", callback_data: 'menu_back' }]] };
  if (editMsgId) return editMessage(env, chatId, editMsgId, text, { parse_mode: "Markdown", reply_markup: keyboard });
  return sendMessage(env, chatId, text, { parse_mode: "Markdown", reply_markup: keyboard });
}

async function showReferral(env, chatId, userId, editMsgId = null) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/users?telegram_id=eq.${userId}&select=referral_code`, { headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}` } });
  const user = (await res.json())[0];
  if (!user || !user.referral_code) return sendMessage(env, chatId, "❌ ইউজার পাওয়া যায়নি।");
  const link = `https://t.me/${env.BOT_USERNAME || 'TurkFlixbd_Bot'}?startapp=ref_${user.referral_code}`;
  const text = `👥 *রেফারেল সিস্টেম*\n\nবন্ধুকে আমন্ত্রণ জানান, প্রতি সফল রেফারেলে কয়েন পান!\n\n🔗 *আপনার রেফারেল লিংক:*\n\`${link}\`\n\n_(লিংকে ক্লিক করে কপি করুন)_`;
  const keyboard = { inline_keyboard: [[{ text: "📤 টেলিগ্রামে শেয়ার করুন", url: `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent("🎬 ভিডিও দেখুন, কয়েন আয় করুন!")}` }], [{ text: "🔙 মেইন মেনু", callback_data: 'menu_back' }]] };
  if (editMsgId) return editMessage(env, chatId, editMsgId, text, { parse_mode: "Markdown", reply_markup: keyboard });
  return sendMessage(env, chatId, text, { parse_mode: "Markdown", reply_markup: keyboard });
}

async function sendMessage(env, chatId, text, opts = {}) { return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, text, ...opts }) }); }
async function editMessage(env, chatId, messageId, text, opts = {}) { return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/editMessageText`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, message_id: messageId, text, ...opts }) }); }
async function answerCallback(env, callbackId, text, showAlert = false) { return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text, show_alert: showAlert }) }); }

async function handleAdminCallback(cq, env) {
    const userId = cq.from.id;
    if (userId !== ADMIN_ID) return answerCallback(env, cq.id, "আপনি অ্যাডমিন নন!", true);
    const data = cq.data; const [action, id] = data.split("_");

    if (action === "approve") {
        await fetch(`${env.SUPABASE_URL}/rest/v1/videos?id=eq.${id}`, { method: "PATCH", headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ status: "approved", published_at: new Date().toISOString() }) });
        await answerCallback(env, cq.id, "✅ ভিডিও অ্যাপ্রুভ করা হয়েছে।");
    } 
    else if (action === "reject") {
        await fetch(`${env.SUPABASE_URL}/rest/v1/videos?id=eq.${id}`, { method: "PATCH", headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ status: "rejected" }) });
        await answerCallback(env, cq.id, "❌ ভিডিও রিজেক্ট করা হয়েছে।");
    }
    else if (action === "wd") {
        const subAction = cq.data.split("_")[1]; const wdId = cq.data.split("_")[2];
        if (subAction === "complete") {
            await fetch(`${env.SUPABASE_URL}/rest/v1/withdrawals?id=eq.${wdId}`, { method: "PATCH", headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ status: "completed", processed_at: new Date().toISOString() }) });
            await answerCallback(env, cq.id, "✅ উইথড্রয়াল সম্পন্ন হয়েছে।");
        } else if (subAction === "reject") {
            await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/admin_adjust_coins`, { method: "POST", headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ p_admin_tg: ADMIN_ID, p_target_tg: cq.message.text.match(/\((\d+)\)/)[1], p_amount: parseInt(cq.message.text.match(/Amount: (\d+)/)[1]), p_reason: "Withdrawal rejected - refund" }) });
            await fetch(`${env.SUPABASE_URL}/rest/v1/withdrawals?id=eq.${wdId}`, { method: "PATCH", headers: { "apikey": env.SUPABASE_SERVICE_KEY, "Authorization": `Bearer ${env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ status: "rejected", processed_at: new Date().toISOString() }) });
            await answerCallback(env, cq.id, "❌ উইথড্রয়াল রিজেক্ট ও রিফান্ড করা হয়েছে।");
        }
    }
    return new Response("OK");
}