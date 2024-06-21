// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log('CLICK');
};

buttonElement.addEventListener('click', printClick);

// # Ejercicios

// ## EVENTOS

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const boton = document.getElementById('button');

const printClick1 = () => {
  console.log(boton.textContent);
};

boton.addEventListener('click', printClick1);

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titulo = document.getElementById('eltitulo');

const moverRaton = () => {
  titulo.textContent = 'Quita de encima!!!';
};
const quitarRaton = () => {
  titulo.textContent = 'Soy un título';
};

titulo.addEventListener('mouseover', moverRaton);

titulo.addEventListener('mouseout', quitarRaton);

// - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const windowsWhith = () => {
  console.log(`Ancho: ${window.innerWidth}, Alto: ${window.innerHeight}`);
};

window.addEventListener('resize', windowsWhith);

// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

// - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

// - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

// - Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.
