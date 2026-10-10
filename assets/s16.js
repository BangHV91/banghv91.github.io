(function(){var K='lw-night',mem=null,D=document.documentElement;
function get(){try{var v=localStorage.getItem(K);if(v!==null)return v}catch(e){}return mem}
function set(v){mem=v;try{localStorage.setItem(K,v)}catch(e){}}
var mq=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)');
function want(){var p=get();return p!==null?p==='1':!!(mq&&mq.matches)}
function btn(){return document.querySelector('.night-btn')}
function sync(){var b=btn();if(!b)return setTimeout(sync,150);if(D.classList.contains('night')!==want()){b.__lwAuto=1;b.click();b.__lwAuto=0;}}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.night-btn');if(b&&!b.__lwAuto&&e.isTrusted)setTimeout(function(){set(D.classList.contains('night')?'1':'0')},0)},true);
mq&&(mq.addEventListener?mq.addEventListener('change',sync):mq.addListener(sync));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',sync);else sync();})();