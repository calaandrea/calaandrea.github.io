const images = [
  "assets/images/preview1.jpg",
  "assets/images/preview2.jpg",
  "assets/images/preview3.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];
const preview = document.getElementById("preview");

if (preview) {
  preview.style.backgroundImage = `url('${randomImage}')`;
}
