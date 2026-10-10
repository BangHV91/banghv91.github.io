(function(){var D=document,it=function(){return D.documentElement.lang==='it'};
function box(){var p=D.getElementById('help-panel');if(!p)return;var b=p.querySelector('.lw-foot');if(!b){b=D.createElement('footer');b.className='lw-foot';}
b.innerHTML='<ul class="lw-soc"><li><a href="https://www.youtube.com/@laurencewho" target="_blank" rel="noopener me">youtube ↗</a></li><li><a href="https://www.instagram.com/laurencewhoooooooooooooooooooo/" target="_blank" rel="noopener me">instagram ↗</a></li></ul>'+
'<p>'+(it()?'privacy: questo sito non usa cookie né sistemi di tracciamento. i video youtube e le anteprime google drive incorporati possono impostare i propri cookie.':'privacy: this site uses no cookies and no tracking. embedded youtube videos and google drive previews may set their own cookies.')+'</p>'+
'<p class="lw-cr">'+(it()?'prodotto da laurence who':'produced by laurence who')+'</p>';
if(b.parentNode!==p||p.lastElementChild!==b)p.appendChild(b);}
box();var o=D.getElementById('help-overlay');o&&new MutationObserver(function(){setTimeout(box,0)}).observe(o,{attributes:true,attributeFilter:['class']});
new MutationObserver(box).observe(D.documentElement,{attributes:true,attributeFilter:['lang']});})();