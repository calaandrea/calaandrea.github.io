document.addEventListener('DOMContentLoaded', () => {
  const sequence = [
    '2026_Lifeboat00001.jpg',
    '2026_Lifeboat00002.jpg',
    '2026_Lifeboat00003.jpg',
    '2026_Lifeboat00004.jpg',
    '2026_Lifeboat00005.jpg',
    '2026_Lifeboat00006.jpg',
    null,
    '2026_Lifeboat00007.jpg',
    '2026_Lifeboat00008.jpg',
    '2026_Lifeboat00009.jpg',
    '2026_Lifeboat00010.jpg',
    '2026_Lifeboat00011.jpg',
    '2026_Lifeboat00012.jpg',
    '2026_Lifeboat00013.jpg',
    '2026_Lifeboat00014.jpg',
    '2026_Lifeboat00015.jpg',
    '2026_Lifeboat00016.jpg',
    '2026_Lifeboat00017.jpg',
    '2026_Lifeboat00018.jpg',
    '2026_Lifeboat00019.jpg',
    '2026_Lifeboat00020.jpg',
    '2026_Lifeboat00021.jpg',
    '2026_Lifeboat00022.jpg',
  ];

  const images = sequence
    .filter(f => f !== null)
    .map(f => `../assets/images/lifeboat/${f}`);

  const thumbsContainer = document.getElementById('thumbs');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  let currentIndex = 0;

  let galleryIndex = 0;

  sequence.forEach(file => {
    const div = document.createElement('div');
    div.className = 'thumb-item';

    if (file === null) {
      // cella vuota
      thumbsContainer.appendChild(div);
      return;
    }

    const src = `../assets/images/lifeboat/${file}`;
    const img = document.createElement('img');
    img.src = src;

    const idx = galleryIndex;
    galleryIndex++;

    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio > 1.7) {
        div.style.gridColumn = 'span 2';
      }
    };

    img.addEventListener('click', () => openLightbox(idx));
    div.appendChild(img);
    thumbsContainer.appendChild(div);
  });

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
});
