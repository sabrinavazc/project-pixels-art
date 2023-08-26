
const blackColor = document.getElementById('black');
blackColor.style.backgroundColor = 'black';
blackColor.className += ' selected';


const greenColor = document.getElementById('green');
greenColor.style.backgroundColor = 'green';

const yellowColor = document.getElementById('yellow');
yellowColor.style.backgroundColor = 'yellow';

const blueColor = document.getElementById('blue');
blueColor.style.backgroundColor = 'blue';


const selectColor = (event) => {
  const colorClicked = event.target;
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  colorClicked.className += ' selected';
};
const verifyClickPalette = () => {
  const colors = document.getElementById('color-palette').children;
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', selectColor);
  }
};
verifyClickPalette();


const hexColor = () => {
  const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColorCode = '#';

  for (let i2 = 0; i2 < 6; i2 += 1) {
    hexColorCode += letters[Math.floor(Math.random() * letters.length)];
  }
  return hexColorCode;
};
const randomizeColors = () => {
  const saveColors = [];
  const colors = document.getElementsByClassName('color');
  for (let i = 1; i < colors.length; i += 1) {
    const color = colors[i];
    color.style.backgroundColor = hexColor();
    saveColors.push(color.style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveColors));
};
const btnRandomColor = document.getElementById('button-random-color');
btnRandomColor.addEventListener('click', randomizeColors);
const clearBoard = () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = 'white';
  }
};
const btnCleanColors = document.getElementById('clear-board');
btnCleanColors.addEventListener('click', clearBoard);


const createLines = (size) => {
  const sectionPixels = document.getElementById('pixel-board');
  for (let i = 1; i <= size; i += 1) {
    const linePixels = document.createElement('ul');
    linePixels.className = 'line';
    linePixels.style.listStyle = 'none';
    sectionPixels.appendChild(linePixels);
  }
};
const createPixels = (size) => {
  const lines = document.getElementsByClassName('line');
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    for (let i2 = 1; i2 <= size; i2 += 1) {
      const pixels = document.createElement('li');
      pixels.className = 'pixel';
      pixels.style.backgroundColor = 'white';
      line.appendChild(pixels);
    }
  }
};
const createBoard = (size) => {
  createLines(size);
  createPixels(size);
};
createBoard(5);


const savePixelArt = () => {
  const pixels = document.getElementsByClassName('pixel');
  const colorPixels = [''];
  for (let i = 0; i < pixels.length; i += 1) {
    const colorSinglePixel = pixels[i].style.backgroundColor;
    colorPixels[i] = colorSinglePixel;
  }
  localStorage.setItem('pixelBoard', JSON.stringify(colorPixels));
};

const paintPixel = (event) => {
  const pixelClicked = event.target;
  const colorSelected = document.getElementsByClassName('selected')[0].style.backgroundColor;
  pixelClicked.style.backgroundColor = colorSelected;
  savePixelArt();
};
const verifyClickPixel = () => {
  const lines = document.getElementsByClassName('line');
  for (let i = 0; i < lines.length; i += 1) {
    const pixels = lines[i].children;
    for (let i2 = 0; i2 < pixels.length; i2 += 1) {
      const pixel = pixels[i2];
      pixel.addEventListener('click', paintPixel);
    }
  }
};
verifyClickPixel();

