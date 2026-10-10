(function(){var p=document.getElementById('help-panel'),b=document.getElementById('lw-back');if(!p||!b)return;
var st=document.createElement('style');st.textContent='#lw-back{display:none!important}'+
'.lw-ih{all:unset;display:block;box-sizing:border-box;position:relative;width:calc(100% - 32px);margin:14px 16px 10px;aspect-ratio:16/11;border-radius:12px;overflow:hidden;background:#fff;cursor:pointer;-webkit-tap-highlight-color:transparent;border:1px solid rgba(0,0,0,.12)}'+
'.lw-ih:focus-visible{outline:2px solid currentColor;outline-offset:2px}'+
'.lw-ih i{position:absolute;inset:0;background-repeat:no-repeat;background-size:auto 100%;background-position:78% bottom}'+
'.lw-ih .b{background-image:url(hero-bg.webp);z-index:1}.lw-ih .f{background-image:url(hero-person.webp);z-index:3}'+
'.lw-ih span{position:absolute;z-index:2;left:7%;top:9%;right:7%;font:700 clamp(18px,6.4vw,30px)/.98 Helvetica,"Helvetica Neue",Arial,sans-serif;letter-spacing:-.045em;color:#000;text-align:left}'+
'html.night .lw-ih{background:#333;border-color:rgba(255,255,255,.16)}html.night .lw-ih i{filter:brightness(.24) contrast(1.15)}html.night .lw-ih span{color:#fff}';
document.head.appendChild(st);
var e=document.createElement('button');e.type='button';e.className='lw-ih';e.innerHTML='<i class="b"></i><span></span><i class="f"></i>';
var t=e.querySelector('span');function tx(){var it=document.documentElement.lang==='it';t.innerHTML=(it?'produttore creativo multidisciplinare':'multidisciplinary creative producer')+'<br>laurence who';e.setAttribute('aria-label',it?'torna all\u2019inizio':'back to the start')}
tx();new MutationObserver(tx).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
function top(){var h=p.querySelector(':scope>.place-head');if(h){if(h.nextElementSibling!==e)p.insertBefore(e,h.nextSibling)}else if(p.firstElementChild!==e)p.insertBefore(e,p.firstChild)}top();var ov=document.getElementById('help-overlay');ov&&new MutationObserver(top).observe(ov,{attributes:true,attributeFilter:['class']});new MutationObserver(top).observe(p,{childList:true});
e.addEventListener('click',function(ev){ev.stopPropagation();var c=document.getElementById('help-close');c&&c.click();setTimeout(function(){b.click()},120)});
})();
