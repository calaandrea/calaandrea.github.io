const images = [];
const thumbsContainer = document.getElementById('thumbs');
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
let currentIndex = 0;

for(let i=1;i<=40;i++){
  const num = i.toString().padStart(5,'0');
  images.push(`../assets/images/lifeboat/2026_Lifeboat${num}.jpg`);
}

function openLightbox(idx){
  currentIndex = idx;
  lbImg.src = images[currentIndex];
  lb.style.display = 'flex';
}

function closeLightbox(){ lb.style.display='none'; }
function prevImage(){ currentIndex = (currentIndex-1+images.length)%images.length; lbImg.src = images[currentIndex]; }
function nextImage(){ currentIndex = (currentIndex+1)%images.length; lbImg.src = images[currentIndex]; }

document.addEventListener('DOMContentLoaded', () => {

  // popola thumbnails
  images.forEach((src, idx) => {
    const div = document.createElement('div');
    div.className = 'thumb-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Lifeboat ${idx+1}`;
    img.addEventListener('click', () => openLightbox(idx));
    const caption = document.createElement('div');
    caption.className = 'thumb-caption';
    caption.innerText = `Photo ${idx+1}`;
    div.appendChild(img);
    div.appendChild(caption);
    thumbsContainer.appendChild(div);
  });

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', prevImage);
  document.getElementById('lbNext').addEventListener('click', nextImage);

  document.addEventListener('keydown', e => {
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowLeft') prevImage();
    if(e.key==='ArrowRight') nextImage();
  });

});