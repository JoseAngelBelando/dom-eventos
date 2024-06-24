import '../scss/styles.scss';

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');

const printTextButton = event => {
  console.log(buttonElement.textContent);
  console.log(event.target.textContent);
};

buttonElement.addEventListener('click', printTextButton);

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');

const changeTextHover = () => {
  titleElement.textContent = 'Quita de encima!!!';
};

const changeTextBlur = () => {
  titleElement.textContent = 'Soy un título';
};

titleElement.addEventListener('mouseover', changeTextHover);
titleElement.addEventListener('mouseout', changeTextBlur);

// - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const printWindowSize = event => {
  console.log(
    `El ancho de la ventana es de ${event.target.innerWidth}px y el alto es de ${event.target.innerHeight}px`
  );
};

// window.addEventListener('resize', printWindowSize);

// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const keyInfoElement = document.getElementById('key-info');

const showKeyInfo = event => {
  keyInfoElement.textContent = `Has pulsado la tecla ${event.key}`;
};

const waitingKeyInfo = () => {
  keyInfoElement.textContent = 'Esperando entrada de teclado...';
};

window.addEventListener('keydown', showKeyInfo);

window.addEventListener('keyup', waitingKeyInfo);

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const words = ['Hola', 'Perro', 'Casa', 'Gato', 'Mariposa'];

// const slideTextElement = document.getElementById('slide-text');
// const buttonPreviousElement = document.getElementById('previous-button');
// const buttonNextElement = document.getElementById('next-button');

// let slideCounter = 0;

// const changeText = () => {
//   slideTextElement.textContent = words[slideCounter];
// };

// const previousText = () => {
//   slideCounter <= 0 ? (slideCounter = words.length - 1) : slideCounter--;
//   changeText();
// };

// const nextText = () => {
//   slideCounter >= words.length - 1 ? (slideCounter = 0) : slideCounter++;

//   changeText();
// };

// slideTextElement.textContent = words[0];

// buttonPreviousElement.addEventListener('click', previousText);
// buttonNextElement.addEventListener('click', nextText);

// - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const slideTextElement = document.getElementById('slide-text');
const buttonPreviousElement = document.getElementById('previous-button');
const buttonNextElement = document.getElementById('next-button');

let slideCounter = 0;

const changeText = () => {
  slideTextElement.textContent = words[slideCounter];
};

const previousText = () => {
  slideCounter--;
  buttonNextElement.disabled = false;

  if (slideCounter === 0) buttonPreviousElement.disabled = true;

  changeText();
};

const nextText = () => {
  slideCounter++;
  buttonPreviousElement.disabled = false;

  if (slideCounter === words.length - 1) buttonNextElement.disabled = true;
  changeText();
};

slideTextElement.textContent = words[0];

buttonPreviousElement.addEventListener('click', previousText);
buttonNextElement.addEventListener('click', nextText);

// - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const rangeLabelElement = document.getElementById('range-label');
const rangeInputElement = document.getElementById('range-input');

const changeTextLabel = () => {
  rangeLabelElement.textContent = rangeInputElement.value;
};

rangeInputElement.addEventListener('input', changeTextLabel);

// - Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.

const checkButtonElement = document.getElementById('check-button');
const checkboxInfoElement = document.getElementById('checkbox-info');

const getCheckboxInfo = () => {
  const inputsElements = document.querySelectorAll('input:checked');
  let resultText = `Están marcados ${inputsElements.length} inputs. `;
  inputsElements.forEach(input => {
    resultText += input.value + ', ';
  });

  checkboxInfoElement.textContent = resultText;
};

checkButtonElement.addEventListener('click', getCheckboxInfo);
