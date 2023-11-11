
//para la fecha
export function estacion(diaE, mesE) {
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
  console.log("Estacion de nacimiento:", estacionNacimiento)
  