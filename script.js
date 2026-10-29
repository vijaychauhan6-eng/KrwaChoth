document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  if (envelope && letter) envelope.addEventListener('click', () => {
    letter.classList.toggle('hidden');
    envelope.querySelector('small').textContent = letter.classList.contains('hidden') ? 'Tap to open' : 'Your letter is open 💗';
    if (!letter.classList.contains('hidden')) letter.scrollIntoView({behavior:'smooth', block:'center'});
  });
  const btn = document.getElementById('confettiBtn');
  const msg = document.getElementById('surpriseMsg');
  if (btn && msg) btn.addEventListener('click', () => {
    msg.textContent = '🎉 ✨ 💖 🎂 🌷 ✨ 💖 🎉';
    for(let i=0;i<32;i++){
      const bit=document.createElement('span');
      bit.textContent=['💗','✨','🎉','🌸','⭐'][Math.floor(Math.random()*5)];
      bit.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-30px;font-size:${18+Math.random()*18}px;z-index:9999;pointer-events:none;transition:transform 2.2s ease-in,opacity 2.2s;`;
      document.body.appendChild(bit);
      requestAnimationFrame(()=>{bit.style.transform=`translateY(${window.innerHeight+80}px) rotate(${Math.random()*500}deg)`;bit.style.opacity='0'});
      setTimeout(()=>bit.remove(),2400);
    }
  });
});