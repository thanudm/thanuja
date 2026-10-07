const nav=document.getElementById('navlinks');
document.querySelector('.menu-btn')?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));

document.querySelectorAll('.filters button').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.work-card').forEach(card=>card.style.display=(f==='all'||card.dataset.cat===f)?'':'none');
 });
});

const cases={
 uma:`<div class="eyebrow">SOCIAL MEDIA CASE STUDY</div><h2>Uma Devi Hospital</h2><p><b>Focus:</b> Social Media Management</p><h3>Problem</h3><p>Build a consistent healthcare education presence and grow the Instagram audience with useful, trust-building content.</p><h3>Strategy & Execution</h3><ul><li>Content planning and educational topics</li><li>Instagram management</li><li>Reels, thumbnails and Canva creatives</li><li>Video editing and publishing workflow</li><li>Audience-focused content optimization</li></ul><h3>Proof</h3><p>The supplied Instagram profile screenshot shows <b>15.4K followers</b>. The portfolio presents this as documented profile proof rather than attributing every follower to one activity.</p><h3>Result</h3><div class="result"><b>15.4K</b><span>Instagram follower journey supplied by the portfolio owner</span></div>`,
 ads:`<div class="eyebrow">PERFORMANCE MARKETING CASE STUDY</div><h2>It's My Flavor — Meta Ads</h2><p><b>Focus:</b> Campaign setup, monitoring and performance analysis.</p><h3>Campaign Execution</h3><ul><li>Campaign structure and audience setup</li><li>Creative and ad setup</li><li>Daily monitoring</li><li>Performance analysis and optimization decisions</li></ul><h3>Verified Campaign Proof</h3><div class="metric-grid"><div><b>₹1,023.42</b><span>Spend</span></div><div><b>31,844</b><span>Impressions</span></div><div><b>24,331</b><span>Reach</span></div><div><b>₹32.14</b><span>CPM</span></div><div><b>₹1.46</b><span>CPC</span></div><div><b>1.58%</b><span>CTR</span></div></div><p class="note">Campaign results are based on the selected campaign period and available tracking data. No sales, revenue or ROAS is claimed unless separately verified.</p><img style="width:100%;border-radius:14px;margin-top:15px" src="assets/proof/meta-ads-day-by-day-proof.jpg" alt="Redacted Meta Ads proof">`
};
const modal=document.getElementById('caseModal'), content=document.getElementById('caseContent');
document.querySelectorAll('.case-btn').forEach(b=>b.addEventListener('click',()=>{content.innerHTML=cases[b.dataset.case];modal.classList.add('open')}));
document.querySelector('.close').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});

const lightbox=document.getElementById('lightbox'), lbImg=document.getElementById('lbImg');
document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{lbImg.src=b.dataset.lightbox;lightbox.classList.add('open')}));
document.querySelector('.lb-close').addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){modal.classList.remove('open');lightbox.classList.remove('open')}});