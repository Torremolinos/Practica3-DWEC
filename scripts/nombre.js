export {nombre,apellidos,nombreCompleto,nombreCompletoLongitud,corte,indice,ultima,nombreCompletoMayus}
  let nombre,apellidos,nombreCompleto,nombreCompletoLongitud,corte,indice,ultima,nombreCompletoMayus;
export const saludo = () => {
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

 nombreCompleto = nombre + " " + apellidos;
 nombreCompletoLongitud = nombreCompleto.length + 1;
 corte = nombreCompleto.substring(3);
 indice = nombreCompleto.indexOf("a", 0);
 ultima = nombreCompleto.lastIndexOf("a", nombreCompleto.length + 1);
 nombreCompletoMayus = nombreCompleto.toUpperCase();
};
