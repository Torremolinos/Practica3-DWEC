document.addEventListener("DOMContentLoaded", function () {
  saludo();
});
document.addEventListener("DOMContentLoaded", function () {
  mostrar();
});

const saludo = () => {
  nombre = prompt(
    `Buenos días, introduce tu nombre por favor:`
  ).toLocaleLowerCase();
  while (nombre === null || nombre === undefined || nombre.length <= 0) {
    nombre = prompt(`Buenos días, introduce tu nombre por favor:`);
  }
  apellidos = prompt(`Por favor introduce tus apellidos`);
  while (apellidos === null || apellidos === undefined) {
    apellidos = prompt(`Por favor introduce tus apellidos`);
  }

//   fecha = prompt(
//     `introduce tu fecha de nacimiento con estas pautas con este formato: DD/MM/AAAA`
//   );
//    fechaValida = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(fecha);
//   while (!fechaValida) {
//     fecha = prompt(
//       `introduce tu fecha de nacimiento con estas pautas con este formato: DD/MM/AAAA`
//     );
//   }
  nombreCompleto = nombre + " " + apellidos;
  nombreCompletoLongitud = nombreCompleto.length + 1;
  corte = nombreCompleto.substring(3);
  indice = nombreCompleto.indexOf("a", 0);
  ultima = nombreCompleto.lastIndexOf("a", nombreCompleto.length + 1);
  nombreCompletoMayus = nombreCompleto.toUpperCase();
  fechaNacimiento = new Date(fecha);
//   mesNacimiento = fechaNacimiento.getMonth() + 1;
//   switch (fechaNacimiento.getMonth() + 1) {
//     case value:
//       break;

//     default:
//       break;
//   }
  años = Date - fechaNacimiento.getDate();
  coseno = Math.cos(180 * (Math.PI / 180));
  numeros = [34, 67, 23, 75, 35, 19];
  numeroMayor = Math.max(...numeros);
  numeroAleatorio = Math.random();
};
const mostrar = () => {
  document.open();
  document.write(`<h1>PRÁCTICA 3 - DWEC <b>${nombre}</b></h1>`);
  document.write(`<hr>`);
  document.write(`<p>Buenos dias: <b>${nombre}</b></p>`);
  document.write(
    `<p>Tu nombre completo <b>${nombreCompleto}</b> tiene <b>${nombreCompletoLongitud}</b> caracteres, incluidos espacios`
  );
  document.write(
    `<p>La <b>primera letra 'A' de tu nombre está en la posición </b><b>${
      indice + 1
    }</b></p>`
  );
  document.write(
    `<p>Tu nombre <b>menos las tres primeras letras</b> es <b>${corte}</b></p>`
  );
  document.write(
    `<p>La <b>última letra 'A' de tu nombre está en la posición </b><b>${ultima}</b></p>`
  );
  document.write(
    `<p>Tu nombre todo en <b>MAYÚSCULAS</b> es <b>${nombreCompletoMayus}</b></p>`
  );
  document.write(`<p>El<b> el coseno de 180</b> es <b>${coseno}</b></p>`);
  document.write("<p>El número mayor de (34, 67, 23, 75, 35, 19) es: " + numeroMayor + ".</p>");
  document.write("<p>Ejemplo de número al azar: " + numeroAleatorio + ".</p>");
  document.close();
//   document.write(`<p>Tu<b> edad</b> es <b>${años}</b> años</p>`);
//   document.write(
//     `<p>Naciste en un feliz día de <b>${edad}</b> del año <b>${año}</b></p>`
//   );
 
};
