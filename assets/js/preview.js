const images = [
  "assets/images/previews/preview1.jpg",
  "assets/images/previews/preview2.jpg",
  "assets/images/previews/preview3.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];
const preview = document.getElementById("preview");

if (preview) {
  preview.style.backgroundImage = `url('${randomImage}')`;
}
