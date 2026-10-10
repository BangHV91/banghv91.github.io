(function(){
/* Formspree: replace FORMSPREE_ID with the real form id (e.g. "xyzabcd") to switch from mailto to direct sending */
var ID='meaekrdk',D=document;if(!ID||ID==='FORMSPREE_ID')return;
var f=D.getElementById('contact-form');if(!f)return;
var it=function(){return D.documentElement.lang==='it'},st=D.getElementById('contact-status');
f.addEventListener('submit',function(e){e.preventDefault();e.stopImmediatePropagation();
 var q=function(s){return f.querySelector(s)},nm=q('[aria-label=name],[name=name]'),sb=q('[aria-label=subject],[name=subject]'),ms=q('textarea');
 if(!ms||!ms.value.trim()){ms&&ms.classList.add('is-invalid');st&&(st.textContent=it()?'scrivi un messaggio.':'please write a message.');return;}
 var btn=f.querySelector('[type=submit],button:not([type=button])');btn&&(btn.disabled=true);st&&(st.textContent=it()?'invio…':'sending…');
 fetch('https://formspree.io/f/'+ID,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name:nm?nm.value:'',_subject:sb?sb.value:'',subject:sb?sb.value:'',message:ms.value})})
 .then(function(r){if(!r.ok)throw 0;f.reset();st&&(st.textContent=it()?'grazie, messaggio inviato.':'thank you, message sent.');})
 .catch(function(){st&&(st.innerHTML=it()?'invio non riuscito. scrivi a <a href="mailto:laurence@laurencewho.com">laurence@laurencewho.com</a>.':'sending failed. write to <a href="mailto:laurence@laurencewho.com">laurence@laurencewho.com</a>.');})
 .then(function(){btn&&(btn.disabled=false);});},true);})();