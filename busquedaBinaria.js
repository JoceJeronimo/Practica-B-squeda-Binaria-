let numeroBusqueda = 0;
let minimo = 1;
let maximo = 100;

function asignarTextoElemento(elemento, texto) {
  let elementohtml = document.querySelector(elemento);
  elementohtml.innerHTML = texto;
}

function empezar() {
  minimo = 1; // Reiniciar el límite mínimo
  maximo = 100; // Reiniciar el límite máximo
  document.getElementById("botonInicio").style.visibility = "hidden";
  document.getElementById("botonAcertaste").style.visibility = "visible";
  document.getElementById("botonNumMenor").style.visibility = "visible";
  document.getElementById("botonNumMayor").style.visibility = "visible";
  generarNuevoNumero();
}

function generarNuevoNumero() {
  numeroBusqueda = Math.floor(Math.random() * 100 + 1);
  asignarTextoElemento(
    "h2#numeroNuevo",
    `El número que estás pensando es ${numeroBusqueda}`
  );
}

function elNumeroEsMenor() {
  maximo = numeroBusqueda - 1;
  if (minimo <= maximo) {
    numeroBusqueda =
      Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    asignarTextoElemento("h2", `Tu número es menor o igual que:  ${numeroBusqueda}.`);
  }
}

function elNumeroEsMayor() {
  minimo = numeroBusqueda + 1;
  if (minimo <= maximo) {
    numeroBusqueda =
      Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    asignarTextoElemento("h2", `Tu número es mayor o igual que:  ${numeroBusqueda}.`);
  }
}

function acertaste() {
  asignarTextoElemento(
    "h2",
    `¡El numero en el que estabas pensando es:  ${numeroBusqueda}!`
  );
  document.getElementById("botonInicio").style.visibility = "visible";
  document.getElementById("botonAcertaste").style.visibility = "hidden";
  document.getElementById("botonNumMayor").style.visibility = "hidden";
  document.getElementById("botonNumMenor").style.visibility = "hidden";
}
