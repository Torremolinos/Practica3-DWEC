document.addEventListener("DOMContentLoaded", function () {
  saludo();
});
document.addEventListener("DOMContentLoaded", function () {
  mostrar();
});

//para la fecha
function estacion(diaE, mesE) {
  //convertimos el numero a entero porque es de un promp asi que es un string (mesEntero) diaEntero
  let mesEN = parseInt(mesE)
  let mesEL = mesEN.toString()
  //si hemos introducido e dia sin cero inicial para valores inferiores a 10
  if (diaE < 10) diaE = "0" + diaE;
  let diaEL = diaE.toString();
  //juntamos el mes y el año
  let diaMes = mesEL.concat(diaEL)
  //El resultado de esta concatenacion se pasa a numero entero
  estac = parseInt(diaMes)
  //en el if comprobamos que estac no sea menor a cero y otro else que sea valor null.
  if (estac > 0) {
    //desde el 21 de marzo (321) hasta el 20 de junio (620) es Primavera
    //3 es del mes 21 es del dia, por el cual se suman.
    if (estac >= 321 && estac <= 620) {
      return "Primavera"
      //desde el 21 de junio (621) 6 del 21. Hasta el 20 de septiembre. 920 Es verano 20 del 9.
    } else if (estac >= 621 && estac <= 920) {
      return "Verano"
      //ahora otoño que es desde el 21 de septiembre (921) hasta el 20 de diciembre (1220)
    } else if (estac >= 921 && estac <= 1220) {
      return "Otoño"
      //ahora invierno que es desde el 21 diciembre hasta el 20 de Marzo (2003)
    } else {
      return "Invierno"
    }
  } else {
    return null;
  }
}
let estacionNacimiento = estacion(16, 10);
console.log("Estacion de nacimiento:", estacionNacimiento);
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
    `<p>La <b>primera letra 'A' de tu nombre está en la posición </b><b>${indice + 1
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
