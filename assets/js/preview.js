const images = [
  "assets/images/previews/2026_Lifeboat00001.jpg",
  "assets/images/previews/2026_Lifeboat00002.jpg",
  "assets/images/previews/2026_Lifeboat00003.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];
const preview = document.getElementById("preview");

if (preview) {
  preview.style.backgroundImage = `url('${randomImage}')`;
}
