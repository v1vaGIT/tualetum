console.log('loaded')
//шарики start
const container = document.querySelector('.startScreen');
const count = 40; // количество дочерних div
const balls = [];
const sizes = [70, 50, 9];        // допустимые размеры px
const opacities = [1, 0.5, 0.3];  // допустимые значения opacity

// Создаем элементы и добавляем их в контейнер
for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.classList.add('ball');

    // Случайные параметры
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const opacity = opacities[Math.floor(Math.random() * opacities.length)];

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.opacity = opacity;

    container.appendChild(el);

    const x = Math.random() * container.clientWidth;
    const y = Math.random() * container.clientHeight;
    const vx = (Math.random() - 0.5) * 2;
    const vy = (Math.random() - 0.5) * 2;

    balls.push({
      el,
      x,
      y,
      vx,
      vy
    });
  }

// Функция для обновления скорости (случайное направление)
function updateRandomDirection(ball) {
let angle = Math.random() * 2 * Math.PI;
ball.vx = Math.cos(angle) * (Math.random() * 1.5 + 0.5);
ball.vy = Math.sin(angle) * (Math.random() * 1.5 + 0.5);
}

// Обновление позиций через requestAnimationFrame
function animate() {
balls.forEach(ball => {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Отражение от стенок
    if (ball.x <= 0 || ball.x >= container.clientWidth) ball.vx *= -1;
    if (ball.y <= 0 || ball.y >= container.clientHeight) ball.vy *= -1;

    // Применяем новые координаты
    ball.el.style.left = `${ball.x}px`;
    ball.el.style.top = `${ball.y}px`;
});

requestAnimationFrame(animate);
}

// Меняем направление каждые 4 секунды
setInterval(() => {
balls.forEach(updateRandomDirection);
}, 4000);

animate();

//шарики end

//tualet
const tualetContainer = document.querySelector('.startScreen__tualet');
const image = document.querySelector('.startScreen__tualet-follow-image');

let mouseX = 0;
let mouseY = 0;
let imageX = 0;
let imageY = 0;
let animationFrameId;

// Задержка и интенсивность смещения
const delay = 0.9; // чем меньше — тем быстрее следует
const intensity = 0.1; // сила смещения

function animateTualet() {
  imageX += (mouseX - imageX) * delay;
  imageY += (mouseY - imageY) * delay;

  image.style.transform = `translate(${imageX * intensity}px, ${imageY * intensity}px)`;

  animationFrameId = requestAnimationFrame(animateTualet);
}

tualetContainer.addEventListener('mousemove', (e) => {
  const rect = tualetContainer.getBoundingClientRect();
  mouseX = e.clientX - rect.left - container.offsetWidth / 2;
  mouseY = e.clientY - rect.top - container.offsetHeight / 2;
});

tualetContainer.addEventListener('mouseleave', () => {
  // Сбросить позицию мыши, чтобы изображение вернулось
  mouseX = 0;
  mouseY = 0;
});

container.addEventListener('mouseenter', () => {
  // Возобновляем анимацию при возвращении
  if (!animationFrameId) {
    animateTualet();
  }
});

// Запуск анимации
animateTualet();

//sleder1
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4, // Количество видимых слайдов
  spaceBetween: 20, // Расстояние между слайдами

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-whom',
    prevEl: '.swiper-button-prev-whom',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4, // Количество видимых слайдов
  spaceBetween: 20, // Расстояние между слайдами

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-work',
    prevEl: '.swiper-button-prev-work',
  },
});


ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [48.418, 135.136118],
    zoom: 14
  });
}