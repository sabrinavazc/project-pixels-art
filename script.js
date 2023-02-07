//botão randomico//
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
  
randonButton.addEventListener('click', function () {
    for (let index = 1; index < colorspalette.length; index += 1) {
      colorspalette[index].style.backgroundColor = randomColor();
    }
  });

//local storage//

localStorage.setItem('colorspalette', JSON.stringify(colorObject));