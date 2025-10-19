const carrusel = document.getElementById('carrusel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;
const slides = carrusel.children;
const total = slides.length;

function showSlide() {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

// Botones
prev.addEventListener('click', () => {
  index = (index - 1 + total) % total; // retrocede y vuelve al final si está en el primero
  showSlide();
});

next.addEventListener('click', () => {
  index = (index + 1) % total; // vuelve al inicio al llegar al final
  showSlide();
});

// Opcional: auto-slide cada 5s
setInterval(() => {
  index = (index + 1) % total;
  showSlide();
}, 5000);
