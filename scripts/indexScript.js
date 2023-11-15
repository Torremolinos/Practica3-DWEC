/**
 * @author:Adrian Iglesias Riño
 * @github:https://github.com/Torremolinos/Practica3-DWEC
 */
import { mostrar } from "./mostrar.js";
import { saludo } from "./nombre.js";
import { cos, numeros, aleatorio } from "./coseno-max-aleatorio.js";
import { nacimiento,estacion } from "./edadFecha.js";
document.addEventListener("DOMContentLoaded", function () {
  saludo();
  cos();
  numeros();
  aleatorio();
  estacion();
  nacimiento();
  mostrar();
});
