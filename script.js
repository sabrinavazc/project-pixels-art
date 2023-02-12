//botão randomico - sem o incluir o index 0 do black//
const section = document.querySelector("section");

const randonButton = document.createElement("button");
section.appendChild (randonButton);
randonButton.id = "button-random-color";
randonButton.innerHTML = "Cores aleatórias"

const colorspalette = document.querySelectorAll(".color");

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };
  
randonButton.addEventListener('click', () => {
    for (let index = 1; index < colorspalette.length; index += 1) {
      colorspalette[index].style.backgroundColor = randomColor();
    }
  });



// //local storage-------------!!!!!!!!!!!!????????//

// function saveLocalStorage(){
//     const newPaletteColors = document.querySelector("#color-palette");
//     localStorage.setItem("newColors",colorspalette);
// }


//quadro de pixels//

const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 5; index += 1) {
    const line = document.createElement("div");
    line.style.display = 'flex';
                for (let i = 0; i < 5; i += 1) {
                    const pixel = document.createElement("div")
                    pixel.classList.add("pixel");
                    line.appendChild(pixel);
  }
  pixelBoard.appendChild(line);
}

const createPixels = (scale) => {
  const lines = document.getElementsByClassName('line');
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    for (let index2 = 1; index2 <= scale; index2 += 1) {
      const pixels = document.createElement('li');
      pixels.className = 'pixel';
      pixels.style.backgroundColor = 'white';
      line.appendChild(pixels);
    }
  }
};

  const createBoard = (scale) => {
    createLines(scale);
    createPixels(scale);
  };
  createBoard(5);

