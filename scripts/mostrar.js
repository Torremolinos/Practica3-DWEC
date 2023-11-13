import {nombre,nombreCompleto,nombreCompletoLongitud,corte,indice,ultima,nombreCompletoMayus} from './nombre.js'
import {coseno, numeroMayor, numeroAleatorio} from "./coseno-max-aleatorio.js";
import { estacionNacimiento,edad} from "./edadFecha.js";
const abrirVentana = document.createElement("button");
const reiniciar= document.createElement("button");
export const mostrar = () => {
  document.open();
  document.write(`<h1>PRÁCTICA 3 - DWEC <b>${nombre}</b></h1>`);
  document.write(`<hr>`);
  document.write(`<p>Buenos dias: <b>${nombre}</b></p>`);
  document.write(`<p>Tu nombre completo <b>${nombreCompleto}</b> tiene <b>${nombreCompletoLongitud}</b> caracteres, incluidos espacios`);
  document.write(`<p>La <b>primera letra 'A' de tu nombre está en la posición </b><b>${indice + 1}</b></p>`);
  document.write(`<p>La <b>última letra 'A' de tu nombre está en la posición </b><b>${ultima+1}</b></p>`);
  document.write(`<p>Tu nombre <b>menos las tres primeras letras</b> es <b>${corte}</b></p>`);
  document.write(`<p>Tu nombre todo en <b>MAYÚSCULAS</b> es <b>${nombreCompletoMayus}</b></p>`);
  document.write(`<p>Tu <b>edad</b> es <b>${edad}</b></p>`);
  document.write(`Estacion de nacimiento: <b>${estacionNacimiento}</b>`);
  document.write(`<p>Tu nombre todo en <b>MAYÚSCULAS</b> es <b>${nombreCompletoMayus}</b></p>`);
  document.write(`<p>El<b> el coseno de 180</b> es <b>${coseno}</b></p>`);
  document.write("<p>El número mayor de <b>(34, 67, 23, 75, 35, 19)</b> es: <b>" + numeroMayor + ".</b></p>");
  document.write("<p>Ejemplo de número al azar entre <b>0</b> y <b>100</b> es <b>: " + numeroAleatorio + ".</b></p>");
  abrirVentana.innerText = `Abrir ventana`;
  abrirVentana.style.margin = "2px"
  abrirVentana.style.padding = "2px"
  document.body.appendChild(abrirVentana)
  reiniciar.innerText = `Reiniciar`;
  reiniciar.style.margin = "2px"
  reiniciar.style.padding = "2px"
  document.body.appendChild(reiniciar)
  document.close();
};

abrirVentana.addEventListener("click", ()=>{
  window.open('templates/openTana.html', "_blank");
})
reiniciar.addEventListener("click", () =>{
  location.reload();
})
