document.addEventListener('DOMContentLoaded', () => {
  const images = [];
  const thumbsContainer = document.getElementById('thumbs');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  let currentIndex = 0;

  function loadImages(i) {
    const num = i.toString().padStart(5, '0');
    const src = `../assets/images/lifeboat/2026_Lifeboat${num}.jpg`;
    const tester = new Image();
    tester.onload = () => {
      images.push(src);
      addThumb(src, images.length - 1);
      loadImages(i + 1);
    };
    tester.onerror = () => {
      // nessuna altra foto trovata, ci fermiamo
    };
    tester.src = src;
  }

  function addThumb(src, idx) {
    const div = document.createElement('div');
    div.className = 'thumb-item';
    const img = document.createElement('img');
    img.src = src;

    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio > 1.7) {
        div.style.gridColumn = 'span 2';
      }
    };

    img.addEventListener('click', () => openLightbox(idx));
    div.appendChild(img);
    thumbsContainer.appendChild(div);
  }

  function openLightbox(idx) {
    currentIndex = idx;
    lbImg.src = images[currentIndex];
    lb.style.display = 'flex';
  }

  function closeLightbox() { lb.style.display = 'none'; }
  function prevImage() { currentIndex = (currentIndex - 1 + images.length) % images.length; lbImg.src = images[currentIndex]; }
  function nextImage() { currentIndex = (currentIndex + 1) % images.length; lbImg.src = images[currentIndex]; }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', prevImage);
  document.getElementById('lbNext').addEventListener('click', nextImage);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  loadImages(1);
});