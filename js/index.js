const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.image');
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const renderBtn = controls.querySelector('[data-action="render"]');
const destroyBtn = controls.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  showImage(currentIndex);
});

showImage(currentIndex);


function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();
    div.style.margin = '5px';
    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

renderBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
