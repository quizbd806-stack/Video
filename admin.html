<!DOCTYPE html>
<html lang="bn" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>TurkFlix BD</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<style>
/* ================= ULTRA PREMIUM THEME ================= */
:root[data-theme="dark"] { 
  --bg-1: #05050f; --bg-2: #14062b; 
  --glass-bg: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01));
  --glass-border: rgba(255,255,255,0.15); 
  --glass-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 10px 20px -10px rgba(255,255,255,0.3);
  --text: #ffffff; --text-muted: #a0a0b0; 
  --neon-1: #00e5ff; --neon-2: #ff00e5; --neon-3: #a855f7; --gold: #ffd700; 
}
:root[data-theme="light"] { 
  --bg-1: #e6ecff; --bg-2: #f5f0ff; 
  --glass-bg: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));
  --glass-border: rgba(255,255,255,0.6); 
  --glass-shadow: 0 10px 40px rgba(31,38,135,0.15), inset 0 0 0 1px rgba(255,255,255,0.8), inset 0 10px 20px -10px rgba(255,255,255,0.9);
  --text: #1a1a2e; --text-muted: #555; 
  --neon-1: #0077ff; --neon-2: #d500f9; --neon-3: #6200ea; --gold: #ff8f00; 
}

* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
body { 
  margin: 0; font-family: -apple-system, "Segoe UI", Roboto, sans-serif; 
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2)); background-attachment: fixed; 
  color: var(--text); min-height: 100vh; padding-bottom: 120px; overflow-x: hidden;
}

/* ================= 3D GLASS BOXES ================= */
.glass-card, .glass-header, .video-card, .cat-card, .stat-card { 
  background: var(--glass-bg); 
  backdrop-filter: blur(25px) saturate(200%); -webkit-backdrop-filter: blur(25px) saturate(200%); 
  border: 1px solid var(--glass-border); 
  border-radius: 24px; 
  box-shadow: var(--glass-shadow); 
  position: relative; overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.glass-card::before { 
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 50%; 
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%); 
  border-radius: 24px 24px 0 0; pointer-events: none; 
}

/* ================= 3D TEXT EFFECTS ================= */
.text-3d { 
  font-weight: 900; font-size: 1.8rem; margin: 0; 
  background: linear-gradient(135deg, var(--neon-1), var(--neon-2), var(--neon-3)); 
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
  background-clip: text; 
  filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.5)) drop-shadow(0px 0px 15px var(--neon-3)); 
  transform: translateZ(30px); animation: floatText 3s ease-in-out infinite; 
}
@keyframes floatText { 0%, 100% { transform: translateZ(30px) translateY(0); } 50% { transform: translateZ(40px) translateY(-8px); } }
.text-3d-sm { font-weight: 800; font-size: 1.05rem; text-shadow: 0 2px 5px rgba(0,0,0,0.8), 0 0 10px var(--neon-1); }

/* ================= HEADER ================= */
.glass-header { position: sticky; top: 10px; margin: 10px 14px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; z-index: 50; }
.user-info { display: flex; gap: 14px; align-items: center; }
.avatar { width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--neon-1); object-fit: cover; box-shadow: 0 0 20px var(--neon-1), inset 0 0 10px rgba(0,0,0,0.5); }
.coin-badge { 
  background: linear-gradient(135deg, var(--gold), #ff9500); color: #000; 
  padding: 6px 14px; border-radius: 14px; font-size: 0.85rem; font-weight: 900; 
  display: inline-block; box-shadow: 0 4px 15px rgba(255,215,0,0.5), inset 0 2px 4px rgba(255,255,255,0.6); 
  text-shadow: 0 1px 1px rgba(255,255,255,0.4); 
}

/* ================= 3D BUTTONS ================= */
.glass-btn { 
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); 
  border: 1px solid var(--glass-border); 
  backdrop-filter: blur(10px); color: var(--text); 
  padding: 12px 20px; border-radius: 16px; font-weight: 800; cursor: pointer; 
  transition: all 0.15s; font-size: 0.9rem; 
  box-shadow: 0 8px 20px rgba(0,0,0,0.4), inset 0 2px 2px rgba(255,255,255,0.3), inset 0 -2px 2px rgba(0,0,0,0.2); 
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.glass-btn:active { transform: scale(0.94) translateY(3px); box-shadow: 0 2px 5px rgba(0,0,0,0.4), inset 0 2px 5px rgba(0,0,0,0.4); }
.glass-btn.primary { 
  background: linear-gradient(135deg, var(--neon-1), var(--neon-3)); 
  border: none; color: white; padding: 14px; 
  box-shadow: 0 10px 30px rgba(168,85,247,0.6), inset 0 2px 3px rgba(255,255,255,0.5), inset 0 -2px 3px rgba(0,0,0,0.3); 
}

/* ================= INPUTS ================= */
.glass-input { 
  width: 100%; padding: 14px 16px; 
  background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); 
  border-radius: 16px; color: var(--text); font-size: 0.95rem; margin-bottom: 12px; outline: none; 
  box-shadow: inset 0 4px 8px rgba(0,0,0,0.5), 0 1px 1px rgba(255,255,255,0.1); 
  transition: border 0.3s;
}
.glass-input:focus { border-color: var(--neon-1); box-shadow: inset 0 4px 8px rgba(0,0,0,0.5), 0 0 15px var(--neon-1); }

/* ================= LAYOUT & CATEGORIES ================= */
.page-content { padding: 14px; }
.section-title { font-size: 1.25rem; font-weight: 900; margin: 25px 0 15px; display: flex; align-items: center; gap: 8px; text-shadow: 0 3px 10px rgba(0,0,0,0.6); }
.cat-scroll { display: flex; gap: 14px; overflow-x: auto; padding: 10px 0 20px 0; scrollbar-width: none; }
.cat-scroll::-webkit-scrollbar { display: none; }
.cat-card { min-width: 105px; padding: 18px 10px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.cat-card:active { transform: scale(0.9); }
.cat-icon { font-size: 2.4rem; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.7)); }
.cat-name { font-size: 0.9rem; font-weight: 800; color: var(--text); text-shadow: 0 2px 5px rgba(0,0,0,0.6); }

/* ================= VIDEO CARDS ================= */
.video-card { margin-bottom: 22px; padding: 0; cursor: pointer; }
.video-card:active { transform: scale(0.96); }
.video-thumb { width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 24px 24px 0 0; display: block; background: #000; }
.video-info { padding: 16px; }
.video-title { font-weight: 800; margin: 0 0 12px; font-size: 1.05rem; line-height: 1.4; text-shadow: 0 2px 4px rgba(0,0,0,0.6); }
.video-meta { display: flex; gap: 15px; font-size: 0.85rem; color: var(--text-muted); flex-wrap: wrap; align-items: center; font-weight: 700; }
.reward-badge { 
  background: linear-gradient(135deg, var(--gold), #ff9500); color: #000; 
  padding: 5px 14px; border-radius: 14px; font-size: 0.85rem; font-weight: 900; 
  box-shadow: 0 4px 15px rgba(255,215,0,0.5), inset 0 1px 2px rgba(255,255,255,0.5); 
}

/* ================= FIXED BOTTOM NAV ================= */
.glass-bottom-nav { 
  position: fixed; bottom: 0; left: 0; right: 0; margin: 0 14px 15px 14px; 
  display: flex; justify-content: space-around; padding: 12px; 
  border-radius: 28px; z-index: 99999; 
  background: rgba(10,10,26,0.85); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); 
  border: 1px solid var(--glass-border); 
  box-shadow: 0 -10px 40px rgba(0,0,0,0.9), inset 0 2px 3px rgba(255,255,255,0.2); 
}
.nav-btn { 
  background: none; border: none; color: var(--text-muted); 
  padding: 10px; border-radius: 20px; display: flex; flex-direction: column; align-items: center; 
  font-size: 0.8rem; gap: 5px; cursor: pointer; transition: all 0.3s; flex: 1; font-weight: 800; 
}
.nav-btn.active { 
  color: var(--neon-1); background: linear-gradient(145deg, rgba(0,229,255,0.15), transparent); 
  text-shadow: 0 0 20px var(--neon-1); transform: translateY(-5px); 
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.2);
}

/* ================= STATS ================= */
.stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; }
.stat-card { padding: 22px; text-align: center; }
.stat-card h4 { margin: 0 0 8px; font-size: 0.85rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; }
.stat-card p { margin: 0; font-size: 1.8rem; font-weight: 900; color: var(--neon-1); text-shadow: 0 3px 15px rgba(0,229,255,0.7); }

/* ================= LOADER & POPUP ================= */
.loader-screen { position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--bg-1); z-index: 100000; }
.coin-3d { font-size: 6rem; animation: coin-spin 2s infinite ease-in-out; filter: drop-shadow(0 0 50px var(--gold)); }
@keyframes coin-spin { 0%, 100% { transform: rotateY(0deg) scale(1); } 50% { transform: rotateY(180deg) scale(1.3); } }
.coin-reward-popup { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.9); z-index: 100001; backdrop-filter: blur(15px); }
.coin-reward-popup .content { 
  background: linear-gradient(145deg, rgba(255,255,255,0.15), rgba(0,0,0,0.5)); 
  border: 2px solid var(--gold); border-radius: 35px; padding: 60px; 
  text-align: center; box-shadow: 0 0 80px var(--gold), inset 0 2px 10px rgba(255,255,255,0.3); 
  animation: popIn 0.6s cubic-bezier(0.68,-0.55,0.27,1.55); 
}
@keyframes popIn { 0% { transform: scale(0) rotate(-180deg); } 100% { transform: scale(1) rotate(0deg); } }
.hidden { display: none !important; }

/* ================= VIDEO PLAYER ================= */
.video-player-overlay { position: fixed; inset: 0; z-index: 9999; background: var(--bg-1); display: flex; flex-direction: column; overflow-y: auto; }
.player-header { position: sticky; top: 0; padding: 16px; background: rgba(10,10,26,0.9); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 15px; z-index: 10; border-bottom: 1px solid var(--glass-border); box-shadow: 0 5px 20px rgba(0,0,0,0.6); }
.player-iframe-wrap { width: 100%; aspect-ratio: 16/9; background: #000; position: relative; flex-shrink: 0; }
.player-iframe-wrap iframe, .player-iframe-wrap video { width: 100%; height: 100%; border: 0; }
.download-btn { position: absolute; bottom: 15px; right: 15px; background: rgba(0,0,0,0.8); color: #fff; padding: 10px 18px; border-radius: 12px; text-decoration: none; font-size: 0.9rem; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px); z-index: 10; font-weight: 800; box-shadow: 0 6px 20px rgba(0,0,0,0.6); }
.player-body { padding: 24px 18px; }
.progress-bar { width: 100%; height: 12px; background: rgba(0,0,0,0.6); border-radius: 12px; overflow: hidden; margin: 18px 0; box-shadow: inset 0 3px 6px rgba(0,0,0,0.9); border: 1px solid rgba(255,255,255,0.1); }
.progress-fill { height: 100%; background: linear-gradient(90deg, var(--neon-1), var(--neon-2)); width: 0%; transition: width 0.3s; box-shadow: 0 0 20px var(--neon-1); }
.action-row { display: flex; gap: 15px; margin: 24px 0; }
.action-btn { 
  flex: 1; padding: 16px; 
  background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.3)); 
  border: 1px solid var(--glass-border); border-radius: 18px; 
  color: var(--text); cursor: pointer; font-size: 1rem; font-weight: 800; 
  box-shadow: 0 8px 20px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.3); 
  text-shadow: 0 2px 5px rgba(0,0,0,0.7); transition: all 0.1s; 
}
.action-btn:active { transform: scale(0.95); box-shadow: inset 0 3px 10px rgba(0,0,0,0.5); }
.action-btn.liked { background: linear-gradient(135deg, #ff3366, #ff0066); color: white; border: none; box-shadow: 0 8px 25px rgba(255,0,102,0.6), inset 0 2px 4px rgba(255,255,255,0.4); }

/* ================= COMMENTS ================= */
.comment-input-row { display: flex; gap: 12px; margin-top: 25px; align-items: stretch; }
.comment-input-row input { flex: 1; margin-bottom: 0; background: rgba(0,0,0,0.4); border: 1px solid var(--glass-border); border-radius: 16px; padding: 14px 16px; }
.comment-input-row button { width: auto; padding: 0 28px; border-radius: 16px; font-size: 1rem; font-weight: 900; }
.comment-item { padding: 16px; background: rgba(255,255,255,0.05); border-radius: 18px; margin-bottom: 12px; font-size: 0.95rem; border: 1px solid var(--glass-border); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
.comment-item .author { font-weight: 900; color: var(--neon-1); font-size: 0.9rem; margin-bottom: 6px; display: block; text-shadow: 0 2px 4px rgba(0,0,0,0.6); }
</style>
</head>
<body>
<div id="app">
  <div id="loader" class="loader-screen"><div class="coin-3d">🪙</div><h1 class="text-3d">TurkFlix BD</h1><p style="font-weight:bold; margin-top:15px;">লোড হচ্ছে...</p></div>
  
  <main id="main" class="hidden">
    <header class="glass-header">
      <div class="user-info"><img id="userAvatar" class="avatar" src="https://via.placeholder.com/40"><div><div id="userName" class="text-3d-sm">User</div><div id="userCoin" class="coin-badge">🪙 0</div></div></div>
      <button id="themeToggle" class="glass-btn" style="padding:10px 14px; font-size:1.2rem;">🌙</button>
    </header>
    <div id="pageContent" class="page-content"></div>
  </main>
  
  <nav class="glass-bottom-nav hidden" id="bottomNav">
    <button data-page="home" class="nav-btn active">🏠<span>Home</span></button>
    <button data-page="explore" class="nav-btn">🔍<span>Explore</span></button>
    <button data-page="wallet" class="nav-btn">👛<span>Wallet</span></button>
    <button data-page="referral" class="nav-btn">👥<span>Ref</span></button>
    <button data-page="profile" class="nav-btn">👤<span>Profile</span></button>
  </nav>
  
  <div id="coinPopup" class="coin-reward-popup hidden">
    <div class="content">
      <div class="coin-3d">🪙</div>
      <h2 class="text-3d" id="coinPopupAmount" style="font-size:3.5rem; margin-top:10px;">+10</h2>
      <p id="coinPopupText" style="font-weight:900; font-size:1.3rem; margin-top:15px; text-shadow:0 2px 10px rgba(255,255,255,0.5);">কয়েন অর্জিত!</p>
    </div>
  </div>
</div>

<script type="module">
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const cfg = { SUPABASE_URL: 'https://ttqrlrgdehwkoabiamty.supabase.co', SUPABASE_ANON_KEY: 'sb_publishable_6SU40N9QJZfPxsWYkIepSA_1PBOMvIl', BOT_USERNAME: 'TurkFlixbd_Bot', ADMIN_TELEGRAM_ID: 7609414654, APP_NAME: 'TurkFlix BD', COIN_TO_BDT: 1000, MIN_WITHDRAWAL: 200000, WORKER_URL: 'https://mute-term-3df1.mdranjusadik4.workers.dev' };
const supabase = createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
const tg = window.Telegram?.WebApp;
let currentUser = null; let currentSettings = null;

window.openTelegram = (url) => { if (tg && tg.openTelegramLink) { tg.openTelegramLink(url); } else { window.open(url, '_blank'); } };

async function init() {
  if (tg) { tg.ready(); tg.expand(); try { tg.setHeaderColor('#05050f'); } catch(e){} }
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('themeToggle').textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  document.getElementById('themeToggle').onclick = toggleTheme;
  try {
    await authenticateUser(); await loadSettings(); await renderHome();
    document.getElementById('loader').classList.add('hidden'); document.getElementById('main').classList.remove('hidden'); document.getElementById('bottomNav').classList.remove('hidden');
    setupNav();
  } catch (err) {
    document.getElementById('loader').innerHTML = `<div style="padding:20px;text-align:center;color:#ff6b6b;font-size:1.2rem;font-weight:bold;">❌ ${err.message}<br><br><button onclick="location.reload()" style="padding:12px 25px;border-radius:12px;border:none;background:#ff6b6b;color:#fff;font-weight:800;box-shadow:0 4px 15px rgba(255,0,0,0.4);">Retry</button></div>`;
  }
}
function toggleTheme() { const cur = document.documentElement.getAttribute('data-theme'); const next = cur === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', next); localStorage.setItem('theme', next); document.getElementById('themeToggle').textContent = next === 'dark' ? '🌙' : '☀️'; }
async function authenticateUser() {
  if (!tg || !tg.initDataUnsafe?.user) throw new Error('Telegram ছাড়া অ্যাক্সেস করা যাবে না। Bot থেকে খুলুন।');
  const u = tg.initDataUnsafe.user; const startParam = tg.initDataUnsafe.start_param || ''; const refCode = startParam.startsWith('ref_') ? startParam.slice(4) : null;
  const { data, error } = await supabase.rpc('auth_telegram_user', { p_telegram_id: u.id, p_username: u.username || null, p_first_name: u.first_name || null, p_last_name: u.last_name || null, p_photo_url: u.photo_url || null, p_language_code: u.language_code || 'en', p_ref_code: refCode });
  if (error) throw new Error('Auth failed: ' + error.message);
  if (data.is_banned) throw new Error('আপনার অ্যাকাউন্ট ব্যান করা হয়েছে');
  await refreshUser();
}
async function refreshUser() {
  const u = tg.initDataUnsafe.user; const { data, error } = await supabase.rpc('get_user_data', { p_telegram_id: u.id });
  if (error) throw error; currentUser = data;
  document.getElementById('userName').textContent = currentUser.first_name || 'User';
  document.getElementById('userCoin').textContent = '🪙 ' + currentUser.balance;
  if (currentUser.photo_url) document.getElementById('userAvatar').src = currentUser.photo_url;
}
async function loadSettings() { const { data } = await supabase.from('reward_settings').select('*').eq('id', 1).single(); currentSettings = data; }
function setupNav() { document.querySelectorAll('.nav-btn').forEach(btn => { btn.onclick = () => { document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); const p = btn.dataset.page; if (p === 'home') renderHome(); else if (p === 'explore') renderExplore(''); else if (p === 'wallet') renderWallet(); else if (p === 'referral') renderReferral(); else if (p === 'profile') renderProfile(); }; }); }

async function renderHome() {
  const c = document.getElementById('pageContent'); c.innerHTML = '<p style="text-align:center;padding:20px;font-weight:bold;">Loading...</p>';
  const { data: cats } = await supabase.from('video_categories').select('*').eq('is_active', true).limit(10);
  const { data: videos } = await supabase.from('videos').select('*').eq('status', 'approved').order('published_at', { ascending: false }).limit(20);
  let html = `<h2 class="text-3d" style="margin-bottom:18px; font-size:1.7rem;">Explore Categories</h2><div class="cat-scroll">`;
  if (cats && cats.length) { html += cats.map(cat => `<div class="cat-card glass-card" onclick="window.loadCategory('${cat.id}')"><div class="cat-icon">${cat.icon || '📁'}</div><div class="cat-name">${cat.name}</div></div>`).join(''); }
  html += `</div><h3 class="section-title">🔥 Latest Videos</h3>`;
  if (!videos || !videos.length) html += '<p style="text-align:center;padding:20px;color:var(--text-muted)">কোনো ভিডিও নেই।</p>';
  else html += videos.map(v => videoCardHTML(v)).join('');
  c.innerHTML = html; attachVideoCardEvents();
}

window.loadCategory = (catId) => { document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active')); document.querySelector('[data-page="explore"]').classList.add('active'); renderExplore(catId); };
function videoCardHTML(v) { const thumb = v.thumbnail_url || (v.youtube_id ? `https://img.youtube.com/vi/${v.youtube_id}/hqdefault.jpg` : 'https://via.placeholder.com/640x360/000/fff?text=Video'); return `<div class="glass-card video-card" data-video-id="${v.id}"><img class="video-thumb" src="${thumb}" alt="${esc(v.title)}"><div class="video-info"><p class="video-title">${esc(v.title)}</p><div class="video-meta"><span>👁 ${v.view_count}</span><span>❤ ${v.like_count}</span><span>💬 ${v.comment_count}</span><span class="reward-badge">🪙 +${v.reward_coins || currentSettings.video_watch_coins}</span></div></div></div>`; }
function attachVideoCardEvents() { document.querySelectorAll('.video-card').forEach(card => { card.onclick = () => openPlayer(card.dataset.videoId); }); }

async function openPlayer(videoId) {
  const { data: v } = await supabase.from('videos').select('*').eq('id', videoId).single();
  if (!v) return alert('Video not found');
  let playlist = [];
  if (v.category_id) { const { data: catVideos } = await supabase.from('videos').select('id').eq('category_id', v.category_id).eq('status', 'approved').order('published_at', { ascending: true }); playlist = catVideos.map(item => item.id); } else { playlist = [v.id]; }
  const currentIndex = playlist.indexOf(v.id); const existingOverlay = document.querySelector('.video-player-overlay'); if (existingOverlay) existingOverlay.remove();
  const sessionId = crypto.randomUUID(); const watchStart = Date.now(); let maxWatched = 0; let rewardGranted = false;
  const overlay = document.createElement('div'); overlay.className = 'video-player-overlay';
  let embedHtml = '';
  if (v.source_type === 'youtube') { embedHtml = `<iframe id="ytPlayer" src="https://www.youtube.com/embed/${v.youtube_id}?autoplay=1&enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`; } else { embedHtml = `<video id="nativePlayer" src="${v.video_url}" controls autoplay playsinline></video><a href="${v.video_url}" download="${v.title}.mp4" target="_blank" class="download-btn">⬇️ Download</a>`; }
  overlay.innerHTML = `
    <div class="player-header"><button class="glass-btn" onclick="this.closest('.video-player-overlay').remove()">←</button><h3 class="text-3d-sm" style="flex:1; margin:0; line-height:1.4;">${esc(v.title)}</h3></div>
    <div class="player-iframe-wrap">${embedHtml}</div>
    <div class="player-body">
      <div class="progress-bar"><div class="progress-fill" id="watchProg"></div></div>
      <p id="watchStatus" style="text-align:center;font-size:1rem;font-weight:800;color:var(--gold);text-shadow:0 2px 8px rgba(0,0,0,0.8);">রিওয়ার্ড পেতে ভিডিও দেখুন</p>
      <div class="action-row"><button class="action-btn" id="likeBtn">❤ Like (${v.like_count})</button><button class="action-btn" id="shareBtn">🔗 Share (${v.share_count})</button></div>
      <h4 style="margin:25px 0 15px 0; font-size:1.2rem; font-weight:900; text-shadow:0 2px 8px rgba(0,0,0,0.6);">💬 Comments (${v.comment_count})</h4>
      <div class="comment-input-row"><input class="glass-input" id="commentInput" placeholder="কমেন্ট লিখুন..." maxlength="500"><button class="glass-btn primary" id="commentBtn">Post</button></div>
      <div id="commentsList" style="margin-top:20px"></div>
    </div>`;
  document.body.appendChild(overlay);
  await supabase.from('video_views').insert({ video_id: v.id, user_id: currentUser.id, session_id: sessionId, watched_seconds: 0 });
  const tracker = setInterval(async () => {
    if (!document.body.contains(overlay)) { clearInterval(tracker); return; }
    const elapsed = Math.floor((Date.now() - watchStart) / 1000); if (elapsed > maxWatched) maxWatched = elapsed;
    const minSec = currentSettings.video_watch_min_seconds || 30; const pct = Math.min(100, (maxWatched / minSec) * 100); const prog = document.getElementById('watchProg'); if (prog) prog.style.width = pct + '%';
    if (maxWatched >= minSec && !rewardGranted) {
      rewardGranted = true; await supabase.from('video_views').update({ watched_seconds: maxWatched }).eq('session_id', sessionId);
      const { data, error } = await supabase.rpc('reward_video_watch', { p_telegram_id: tg.initDataUnsafe.user.id, p_video_id: v.id, p_session_id: sessionId });
      if (!error && data) { showCoinPopup(currentSettings.video_watch_coins, 'কয়েন অর্জিত!'); await refreshUser(); const ws = document.getElementById('watchStatus'); if (ws) { ws.textContent = '✅ রিওয়ার্ড পেয়েছেন!'; ws.style.color = 'var(--neon-1)'; } }
    }
  }, 2000);
  const goToNext = () => { clearInterval(tracker); if (currentIndex >= 0 && currentIndex < playlist.length - 1) openPlayer(playlist[currentIndex + 1]); else alert('সব ভিডিও দেখা শেষ!'); };
  if (v.source_type === 'youtube') {
    const ytIframe = document.getElementById('ytPlayer'); if (ytIframe) { ytIframe.addEventListener('load', () => { ytIframe.contentWindow.postMessage('{"event":"listening","id":"ytPlayer"}', '*'); }); window.addEventListener('message', function(event) { if (event.source === ytIframe.contentWindow) { try { const data = JSON.parse(event.data); if (data.event === 'onStateChange' && data.info === 0) goToNext(); } catch(e){} } }); }
  } else { const nativePlayer = document.getElementById('nativePlayer'); if (nativePlayer) nativePlayer.onended = goToNext; }
  document.getElementById('likeBtn').onclick = async (e) => {
    const { error } = await supabase.from('video_likes').insert({ video_id: v.id, user_id: currentUser.id });
    if (error && error.code === '23505') return alert('আগেই লাইক দিয়েছেন'); if (error) return alert('Error: ' + error.message);
    const { data, error: rErr } = await supabase.rpc('reward_like', { p_telegram_id: tg.initDataUnsafe.user.id, p_video_id: v.id });
    if (!rErr && data) { showCoinPopup(currentSettings.like_coins, 'লাইক রিওয়ার্ড!'); await refreshUser(); e.target.classList.add('liked'); e.target.textContent = `❤ Liked (${v.like_count + 1})`; }
  };
  document.getElementById('commentBtn').onclick = async () => {
    const input = document.getElementById('commentInput'); const content = input.value.trim();
    if (content.length < (currentSettings.comment_min_length || 10)) return alert(`কমপক্ষে ${currentSettings.comment_min_length || 10} অক্ষর লিখুন`);
    const { data: newComment, error } = await supabase.from('video_comments').insert({ video_id: v.id, user_id: currentUser.id, content }).select().single();
    if (error) return alert('Error: ' + error.message); input.value = '';
    const { data, error: rErr } = await supabase.rpc('reward_comment', { p_telegram_id: tg.initDataUnsafe.user.id, p_comment_id: newComment.id });
    if (!rErr && data) { showCoinPopup(currentSettings.comment_coins, 'কমেন্ট রিওয়ার্ড!'); await refreshUser(); }
    loadComments(v.id);
  };
  document.getElementById('shareBtn').onclick = async () => {
    const link = `https://t.me/${cfg.BOT_USERNAME}?startapp=video_${v.id}`;
    if (tg) tg.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(v.title)}`);
    await supabase.from('video_shares').insert({ video_id: v.id, user_id: currentUser.id });
  };
  loadComments(v.id);
}

async function loadComments(videoId) {
  const { data } = await supabase.from('video_comments').select('*, users(first_name)').eq('video_id', videoId).eq('is_hidden', false).order('created_at', { ascending: false }).limit(20);
  const list = document.getElementById('commentsList'); if (!list) return;
  if (!data || !data.length) { list.innerHTML = '<p style="color:var(--text-muted);text-align:center;font-weight:700; margin-top:15px;">কোনো কমেন্ট নেই</p>'; return; }
  list.innerHTML = data.map(c => `<div class="comment-item"><span class="author">${esc(c.users?.first_name || 'User')}</span><div>${esc(c.content)}</div></div>`).join('');
}

async function renderExplore(activeCatId = '') {
  const c = document.getElementById('pageContent'); const { data: cats } = await supabase.from('video_categories').select('*').eq('is_active', true);
  let html = '<h3 class="section-title">📂 Categories</h3><div class="cat-scroll" style="margin-bottom:20px">';
  html += `<div class="cat-card glass-card ${activeCatId === '' ? 'active' : ''}" onclick="window.loadCategory('')"><div class="cat-icon">🌟</div><div class="cat-name">সব</div></div>`;
  html += cats.map(cat => `<div class="cat-card glass-card ${activeCatId === cat.id ? 'active' : ''}" onclick="window.loadCategory('${cat.id}')"><div class="cat-icon">${cat.icon}</div><div class="cat-name">${cat.name}</div></div>`).join('');
  html += '</div><div id="exploreVideos"></div>'; c.innerHTML = html; loadExploreVideos(activeCatId);
}
async function loadExploreVideos(catId) {
  let q = supabase.from('videos').select('*').eq('status', 'approved').order('published_at', { ascending: false });
  if (catId) q = q.eq('category_id', catId); const { data } = await q; const div = document.getElementById('exploreVideos');
  if (!data || !data.length) { div.innerHTML = '<p style="text-align:center;padding:20px;color:var(--text-muted)">কোনো ভিডিও নেই</p>'; return; }
  div.innerHTML = data.map(v => videoCardHTML(v)).join(''); attachVideoCardEvents();
}

async function renderWallet() {
  const c = document.getElementById('pageContent'); const { data: txs } = await supabase.from('coin_transactions').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false }).limit(30);
  c.innerHTML = `
    <div class="glass-card" style="padding:30px 20px;text-align:center"><h3 class="text-3d-sm">আমার ব্যালেন্স</h3><p class="text-3d" style="font-size:3.8rem;margin:15px 0">🪙 ${currentUser.balance}</p><p style="color:var(--text-muted);font-size:1.1rem;font-weight:800;">= ৳ ${(currentUser.balance / cfg.COIN_TO_BDT).toFixed(2)}</p></div>
    <div class="glass-card" style="padding:22px; margin-bottom:20px; border: 1px solid var(--gold); box-shadow: 0 10px 40px rgba(255,215,0,0.2), inset 0 0 0 1px rgba(255,215,0,0.3);">
      <h4 style="color:var(--gold); margin-top:0; font-size:1.2rem; text-shadow:0 0 10px rgba(255,215,0,0.5);">💸 Withdrawal Rules</h4>
      <p style="font-size:0.95rem; margin:8px 0; font-weight:700;">• মিনিমাম উইথড্র: <b>২০০ টাকা</b> (${cfg.MIN_WITHDRAWAL} কয়েন)</p>
      <p style="font-size:0.95rem; margin:8px 0; font-weight:700;">• কমপক্ষে <b>২০ জন রেফারেল</b> থাকতে হবে</p>
      <p style="font-size:0.95rem; margin:8px 0; font-weight:700;">• আমাদের <b>টেলিগ্রাম গ্রুপ ও চ্যানেলে</b> জয়েন থাকতে হবে</p>
      <div style="display:flex; gap:12px; margin-top:18px;">
        <button onclick="window.openTelegram('https://t.me/islamicdunia')" class="glass-btn" style="flex:1; background:linear-gradient(135deg,#0088cc,#00aaff); color:white; border:none; font-weight:900; font-size:0.85rem; box-shadow:0 6px 15px rgba(0,136,204,0.4);">Join Group 1</button>
        <button onclick="window.openTelegram('https://t.me/+w9tPMIMLndsyZTNl')" class="glass-btn" style="flex:1; background:linear-gradient(135deg,#0088cc,#00aaff); color:white; border:none; font-weight:900; font-size:0.85rem; box-shadow:0 6px 15px rgba(0,136,204,0.4);">Join Channel 2</button>
      </div>
    </div>
    <div class="glass-card" style="padding:22px">
      <input class="glass-input" id="wdCoins" type="number" placeholder="কয়েন পরিমাণ (মিনিমাম ২০০০০০)" min="${cfg.MIN_WITHDRAWAL}">
      <select class="glass-input" id="wdMethod"><option value="bkash">bKash</option><option value="nagad">Nagad</option><option value="rocket">Rocket</option></select>
      <input class="glass-input" id="wdNumber" placeholder="মোবাইল নম্বর (01XXXXXXXXX)"><button class="glass-btn primary" id="wdBtn">Withdraw Request</button>
      <p id="wdStatus" style="text-align:center; font-size:0.9rem; font-weight:800; margin-top:12px; color:var(--neon-1); text-shadow:0 0 10px var(--neon-1);"></p>
    </div>
    <h3 class="section-title">📜 লেনদেন ইতিহাস</h3>
    <div class="glass-card" style="padding:12px">${(txs || []).length ? txs.map(t => `<div style="padding:14px;border-bottom:1px solid var(--glass-border);display:flex;justify-content:space-between;font-size:0.95rem"><div><div style="font-weight:700;">${esc(t.description || t.type)}</div><div style="font-size:0.8rem;color:var(--text-muted); margin-top:5px; font-weight:600;">${new Date(t.created_at).toLocaleString('bn')}</div></div><div style="color:${t.amount > 0 ? '#4ade80' : '#ff6b6b'};font-weight:900; font-size:1.2rem; text-shadow:0 0 10px ${t.amount > 0 ? 'rgba(74,222,128,0.5)' : 'rgba(255,107,107,0.5)'};">${t.amount > 0 ? '+' : ''}${t.amount}</div></div>`).join('') : '<p style="text-align:center;padding:20px;color:var(--text-muted);font-weight:600;">কোনো লেনদেন নেই</p>'}</div>`;

  document.getElementById('wdBtn').onclick = async () => {
    const coins = parseInt(document.getElementById('wdCoins').value); const method = document.getElementById('wdMethod').value; const number = document.getElementById('wdNumber').value.trim(); const statusEl = document.getElementById('wdStatus');
    if (!coins || coins < cfg.MIN_WITHDRAWAL) return alert(`মিনিমাম ${cfg.MIN_WITHDRAWAL} কয়েন (২০০ টাকা) লাগবে`); if (!/^01\d{9}$/.test(number)) return alert('সঠিক মোবাইল নম্বর দিন');
    
    statusEl.textContent = 'গ্রুপ ও চ্যানেল মেম্বারশিপ চেক করা হচ্ছে...';
    try {
      const res = await fetch(`${cfg.WORKER_URL}/verify-groups`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: tg.initDataUnsafe.user.id }) });
      const groupData = await res.json();
      
      if (!groupData.joined) { 
        statusEl.textContent = ''; 
        console.log("Group errors:", groupData.errors); 
        return alert('❌ উইথড্র করতে প্রথমে আমাদের টেলিগ্রাম গ্রুপ এবং চ্যানেলে জয়েন করুন!\n\n(এরর: ' + (groupData.errors?.[0] || 'Not joined') + ')'); 
      }
      
      statusEl.textContent = 'রেফারেল চেক করা হচ্ছে...';
      const { data, error } = await supabase.rpc('request_withdrawal', { p_telegram_id: tg.initDataUnsafe.user.id, p_coins: coins, p_method: method, p_number: number });
      if (error) { statusEl.textContent = ''; return alert('Error: ' + error.message); }
      
      showCoinPopup(`৳${data.bdt}`, 'উইথড্র রিকোয়েস্ট সফল!');
      statusEl.textContent = 'সফলভাবে রিকোয়েস্ট পাঠানো হয়েছে!'; 
      await refreshUser(); renderWallet();
    } catch (e) { statusEl.textContent = ''; alert('ভেরিফিকেশন ফেইল হয়েছে। আবার চেষ্টা করুন।'); }
  };
}

async function renderReferral() {
  const c = document.getElementById('pageContent'); const link = `https://t.me/${cfg.BOT_USERNAME}?startapp=ref_${currentUser.referral_code}`;
  c.innerHTML = `<div class="glass-card" style="padding:30px 20px;text-align:center"><h3 class="text-3d">👥 Refer & Earn</h3><p style="margin:18px 0;color:var(--text-muted);font-size:1rem; font-weight:700;">বন্ধুকে আমন্ত্রণ জানান, প্রতি সফল রেফারেলে <b style="color:var(--gold); font-size:1.1rem; text-shadow:0 0 10px var(--gold);">${currentSettings.referral_coins} কয়েন</b> পান!</p><div class="glass-input" style="word-break:break-all;font-size:0.85rem;text-align:left; background:rgba(0,0,0,0.4); font-weight:600;">${link}</div><button class="glass-btn primary" id="copyRefBtn" style="margin-top:18px; font-size:1rem;">📋 Copy Link</button></div>`;
  document.getElementById('copyRefBtn').onclick = () => { navigator.clipboard.writeText(link); alert('লিংক কপি হয়েছে!'); };
}

async function renderProfile() {
  const c = document.getElementById('pageContent'); const { data: board } = await supabase.rpc('get_leaderboard', { p_period: 'all', p_limit: 10 }); const { data: videos } = await supabase.from('videos').select('id').eq('status', 'approved');
  c.innerHTML = `
    <div class="glass-card" style="padding:30px;text-align:center; margin-bottom:25px;"><img src="${currentUser.photo_url || 'https://via.placeholder.com/80'}" style="width:100px;height:100px;border-radius:50%;border:3px solid var(--neon-1); box-shadow:0 0 30px var(--neon-1); object-fit:cover;"><h3 class="text-3d" style="margin-top:18px; font-size:2rem;">${esc(currentUser.first_name || 'User')}</h3><p style="color:var(--text-muted); font-weight:700; font-size:1.1rem; margin-top:8px;">@${esc(currentUser.username || 'unknown')}</p>${currentUser.is_admin ? '<p style="color:var(--neon-2);font-weight:900; margin-top:15px; text-shadow:0 0 15px var(--neon-2); font-size:1.2rem; letter-spacing:2px;">👑 ADMIN</p>' : ''}</div>
    <div class="stat-grid"><div class="stat-card"><h4>মোট কয়েন</h4><p>${currentUser.balance}</p></div><div class="stat-card"><h4>আজকের আয়</h4><p>${currentUser.today_earned}</p></div><div class="stat-card"><h4>রেফারেল</h4><p>${currentUser.total_referrals}</p></div><div class="stat-card"><h4>মোট ভিডিও</h4><p>${videos?.length || 0}</p></div></div>
    <h3 class="section-title">🏆 Leaderboard (Top 10)</h3><div class="glass-card" style="padding:12px">${(board || []).map(b => `<div style="padding:15px;display:flex;align-items:center;gap:15px;border-bottom:1px solid var(--glass-border)"><span style="font-weight:900; width:35px; font-size:1.2rem; color:${b.rank <= 3 ? 'var(--gold)' : 'var(--text-muted)'}; text-shadow:${b.rank <= 3 ? '0 0 15px var(--gold)' : 'none'}">#${b.rank}</span><img src="${b.photo_url || 'https://via.placeholder.com/32'}" style="width:45px;height:45px;border-radius:50%; object-fit:cover; border:2px solid var(--glass-border);"><div style="flex:1;font-size:1rem;font-weight:800;">${esc(b.first_name || 'User')}</div><div style="color:var(--gold);font-weight:900; font-size:1.2rem; text-shadow:0 0 10px rgba(255,215,0,0.5);">🪙 ${b.score}</div></div>`).join('')}</div>
    ${currentUser.is_admin ? `<h3 class="section-title">⚙️ Admin</h3><div class="glass-card" style="padding:22px"><button class="glass-btn primary" onclick="window.location.href='admin.html'">Open Admin Panel</button></div>` : ''}`;
}

function showCoinPopup(amountText, messageText = 'কয়েন অর্জিত!') { const p = document.getElementById('coinPopup'); document.getElementById('coinPopupAmount').textContent = amountText; document.getElementById('coinPopupText').textContent = messageText; p.classList.remove('hidden'); setTimeout(() => p.classList.add('hidden'), 2500); if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred('success'); }
function esc(s) { return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
init();
</script>
</body>
</html>