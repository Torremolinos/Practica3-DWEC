//para la fecha
export { anio, edad};
let anio, edad;
export let estacionNacimiento;
export const estacion =()=> {
 let dia = prompt("Por favor escriba el dia en que nacio");
 while(isNaN(dia)|| dia.length<2){
  dia = prompt("Por favor escriba el dia en que nacio");
 }
 let mes = prompt("Por favor escriba el mes en que nacio");
 while(isNaN(mes)|| mes.length<2){
   mes = prompt("Por favor escriba el mes en que nacio");

 }
  //convertimos el numero a entero porque es de un promp asi que es un string (mesEntero) diaEntero
  let mesEN = parseInt(mes);
  let mesEL = mesEN.toString();
  //si hemos introducido e dia sin cero inicial para valores inferiores a 10
  if (dia < 10) dia = "0" + dia;
  let diaEL = dia.toString();
  //juntamos el mes y el año
  let diaMes = mesEL.concat(diaEL);
  //El resultado de esta concatenacion se pasa a numero entero
  let estac = parseInt(diaMes);
  //en el if comprobamos que estac no sea menor a cero y otro else que sea valor null.
  if (estac > 0) {
    //desde el 21 de marzo (321) hasta el 20 de junio (620) es Primavera
    //3 es del mes 21 es del dia, por el cual se suman.
    if (estac >= 321 && estac <= 620) {
      return estacionNacimiento="Primavera";
      //desde el 21 de junio (621) 6 del 21. Hasta el 20 de septiembre. 920 Es verano 20 del 9.
    } else if (estac >= 621 && estac <= 920) {
      return estacionNacimiento="Verano";
      //ahora otoño que es desde el 21 de septiembre (921) hasta el 20 de diciembre (1220)
    } else if (estac >= 921 && estac <= 1220) {
      return estacionNacimiento="Otoño";
      //ahora invierno que es desde el 21 diciembre hasta el 20 de Marzo (2003)
    } else {
      return estacionNacimiento="Invierno";
    }
  } else {
    return null;
  }

}


export const nacimiento = () => {
    const anioNacimiento = prompt("Por favor, escriba el año en que nació");
    while(isNaN(anioNacimiento) || anioNacimiento.length<3){
       anioNacimiento = prompt("Por favor, escriba el año en que nació");
    }
    const fechaNacimiento = new Date(anioNacimiento, 0, 1);
    const fechaActual = new Date();
    
    edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  

    if (fechaActual < fechaNacimiento.setFullYear(fechaActual.getFullYear())) {
      edad--;
    }
  };