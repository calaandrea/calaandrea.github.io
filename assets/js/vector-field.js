document.addEventListener('DOMContentLoaded', () => {
  const sequence = [
    'VectorField00001.jpg',
    'VectorField00002.jpg',
    'VectorField00003.jpg',
    'VectorField00004.jpg',
    'VectorField00005.jpg',
    'VectorField00006.jpg',
    'VectorField00007.jpg',
    'VectorField00008.jpg',
    'VectorField00009.jpg',
    'VectorField00010.jpg',
    'VectorField00011.jpg',
    'VectorField00012.jpg',
    'VectorField00013.jpg',
    'VectorField00014.jpg',
    'VectorField00015.jpg',
    'VectorField00016.jpg',
    'VectorField00017.jpg',
    'VectorField00018.jpg',
    'VectorField00019.jpg',
    'VectorField00020.jpg',
    'VectorField00021.jpg',
    'VectorField00022.jpg',
  ];

  const images = sequence
    .filter(f => f !== null)
    .map(f => `../assets/images/vector-field/${f}`);

  const thumbsContainer = document.getElementById('thumbs');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  let currentIndex = 0;
  let galleryIndex = 0;

  sequence.forEach(file => {
    const div = document.createElement('div');
    div.className = 'thumb-item';
    if (file === null) {
      thumbsContainer.appendChild(div);
      return;
    }
    const src = `../assets/images/vector-field/${file}`;
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
