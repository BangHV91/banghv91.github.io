(function(){
var T={en:{title:'Per strada',by:'by laurence who',desc:'A simple, yet emotional song on the foibe massacres. The title describes the music \u201con the street\u201d, the emptiness of those same streets once covered by people, and their echoes. Birds keep singing over the horrific scenery.',ev:'Giornata del Ricordo 2023 (Trieste, IT)',perf:'performers',p:['soprano 1 \u2013 singer one','soprano 2 \u2013 Carmen Vicente','violin \u2013 Sofia De Martis','piano \u2013 Lorenzo Ritacco','recording \u2013 Lorenzo Bosich'],gal:'open the gallery \u2192',now:'now playing',play:'Play',pause:'Pause',rs:'Restart from the beginning',info:'About this music'},
it:{title:'Per strada',by:'di laurence who',desc:'Un brano semplice ma intenso sui massacri delle foibe. Il titolo descrive la musica \u201cper strada\u201d, il vuoto di quelle stesse strade un tempo piene di persone, e i loro echi. Gli uccelli continuano a cantare sopra lo scenario orribile.',ev:'Giornata del Ricordo 2023 (Trieste, IT)',perf:'interpreti',p:['soprano 1 \u2013 singer one','soprano 2 \u2013 Carmen Vicente','violino \u2013 Sofia De Martis','pianoforte \u2013 Lorenzo Ritacco','registrazione \u2013 Lorenzo Bosich'],gal:'apri la galleria \u2192',now:'in ascolto',play:'Riproduci',pause:'Pausa',rs:'Ricomincia dall\u2019inizio',info:'Informazioni sulla musica'}};
var L=function(){return T[document.documentElement.lang==='it'?'it':'en']};
var st=document.createElement('style');st.textContent=
'.lw-mp{position:fixed;right:68px;bottom:calc(var(--vis-gap,0px) + 20px);margin-bottom:env(safe-area-inset-bottom,0px);z-index:70;height:44px;display:flex;align-items:center;gap:2px;padding:0 6px;border:1px solid #000;border-radius:22px;background:#fff;color:#000;font-family:Helvetica,Arial,sans-serif;opacity:0;pointer-events:none;transition:opacity .8s ease}'+
'.lw-mp.on{opacity:1;pointer-events:auto}body.lw-hero-on .lw-mp{opacity:0;pointer-events:none}'+
'.lw-mp button{all:unset;cursor:pointer;width:32px;height:32px;display:grid;place-items:center;border-radius:50%;-webkit-tap-highlight-color:transparent}'+
'.lw-mp button:focus-visible{outline:2px solid currentColor}.lw-mp svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}'+
'.lw-mp .wv{width:64px;height:32px;border-radius:16px}.lw-mp .wv svg{width:64px;height:20px;stroke-width:1.2}'+
'.lw-mpc{position:fixed;right:16px;bottom:calc(var(--vis-gap,0px) + 74px);margin-bottom:env(safe-area-inset-bottom,0px);z-index:71;width:min(320px,calc(100vw - 32px));box-sizing:border-box;padding:18px 18px 16px;background:#fff;color:#000;border:1px solid #000;border-radius:14px;font:13px/1.45 Helvetica,Arial,sans-serif}'+
'.lw-mpc[hidden]{display:none}.lw-mpc .k{font-size:11px;letter-spacing:.04em;opacity:.55}.lw-mpc h2{margin:4px 0 0;font-size:20px;font-weight:700;letter-spacing:-.02em}.lw-mpc .by{opacity:.65;margin-bottom:10px}'+
'.lw-mpc p{margin:0 0 10px}.lw-mpc ul{list-style:none;margin:4px 0 12px;padding:0}.lw-mpc .g{all:unset;cursor:pointer;font-weight:700;border-bottom:1px solid currentColor}'+
'html.night .lw-mp,html.night .lw-mpc{background:#000;color:#fff;border-color:#fff}';
document.head.appendChild(st);
var a=document.createElement('audio');a.preload='none';a.setAttribute('playsinline','');
a.innerHTML='<source src="music.m4a" type="audio/mp4"><source src="music.mp3" type="audio/mpeg">';document.body.appendChild(a);
var P='<svg viewBox="0 0 16 16"><path d="M5 3.5v9l7-4.5z"/></svg>',Z='<svg viewBox="0 0 16 16"><path d="M5.5 3.5v9M10.5 3.5v9"/></svg>';
var m=document.createElement('div');m.className='lw-mp';m.setAttribute('role','group');
m.innerHTML='<button type="button" class="pp"></button><button type="button" class="wv" aria-expanded="false"><svg viewBox="0 0 64 20" preserveAspectRatio="none"><path/></svg></button><button type="button" class="rs"><svg viewBox="0 0 16 16"><path d="M3.5 8a4.5 4.5 0 1 0 1.4-3.3"/><path d="M3.5 2.5v2.8h2.8"/></svg></button>';
document.body.appendChild(m);
var c=document.createElement('div');c.className='lw-mpc';c.hidden=true;c.setAttribute('role','dialog');document.body.appendChild(c);
var pp=m.querySelector('.pp'),wv=m.querySelector('.wv'),rs=m.querySelector('.rs'),path=m.querySelector('path');
function txt(){var t=L();pp.innerHTML=a.paused?P:Z;pp.setAttribute('aria-label',a.paused?t.play:t.pause);rs.setAttribute('aria-label',t.rs);wv.setAttribute('aria-label',t.info);m.setAttribute('aria-label',t.now+': '+t.title);
c.innerHTML='<div class="k">'+t.now+'</div><h2>'+t.title+'</h2><div class="by">'+t.by+'</div><p>'+t.desc+'</p><div class="k">'+t.ev+' \u00b7 '+t.perf+'</div><ul>'+t.p.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><button type="button" class="g">'+t.gal+'</button>';
c.querySelector('.g').onclick=function(e){e.stopPropagation();c.hidden=true;wv.setAttribute('aria-expanded','false');openGallery()};}
function openGallery(){var g=[].slice.call(document.querySelectorAll('.poi.main')).find(function(x){return /^galler/i.test(x.getAttribute('aria-label')||'')});if(g)g.dispatchEvent(new MouseEvent('click',{bubbles:true}))}
var ctx,gain;
function fade(to,ms){if(gain){var n=ctx.currentTime;gain.gain.cancelScheduledValues(n);gain.gain.setValueAtTime(gain.gain.value,n);gain.gain.linearRampToValueAtTime(to,n+ms/1000)}}
function graph(){if(ctx)return;try{var AC=window.AudioContext||window.webkitAudioContext;ctx=new AC();var s=ctx.createMediaElementSource(a);gain=ctx.createGain();gain.gain.value=0;s.connect(gain);gain.connect(ctx.destination)}catch(e){ctx=null;gain=null}}
var started=false;
function start(){if(started)return;started=true;graph();if(ctx&&ctx.state==='suspended')ctx.resume();
var seek=function(){try{a.currentTime=148}catch(e){}};seek();a.addEventListener('loadedmetadata',function f(){a.removeEventListener('loadedmetadata',f);if(a.currentTime<140)seek()});
var pr=a.play();if(pr&&pr.catch)pr.catch(function(){});fade(1,2000);m.classList.add('on');txt()}
var ex=document.getElementById('lw-explore');if(ex)ex.addEventListener('click',start);
pp.onclick=function(e){e.stopPropagation();if(!started){start();return}if(ctx&&ctx.state==='suspended')ctx.resume();if(a.paused){a.play();fade(1,400)}else a.pause()};
rs.onclick=function(e){e.stopPropagation();if(!started){started=true;graph();m.classList.add('on')}if(ctx&&ctx.state==='suspended')ctx.resume();a.currentTime=0;if(a.paused)a.play();fade(1,300)};
wv.onclick=function(e){e.stopPropagation();c.hidden=!c.hidden;wv.setAttribute('aria-expanded',String(!c.hidden))};
c.addEventListener('click',function(e){e.stopPropagation()});c.addEventListener('pointerdown',function(e){e.stopPropagation()});m.addEventListener('pointerdown',function(e){e.stopPropagation()});
document.addEventListener('click',function(){if(!c.hidden){c.hidden=true;wv.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!c.hidden){c.hidden=true}});
a.addEventListener('play',txt);a.addEventListener('pause',txt);a.addEventListener('ended',txt);
new MutationObserver(txt).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});txt();
(function(){var d='M0 10';for(var x=2;x<=64;x+=2){var e=Math.sin(Math.PI*x/64);d+=' L'+x+' '+(10+Math.sin(x*0.28)*Math.sin(x*0.07+1)*6*e).toFixed(2)}path.setAttribute('d',d)})();
})();
