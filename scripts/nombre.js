export {nombre,apellidos,nombreCompleto,nombreCompletoLongitud,corte,indice,ultima,nombreCompletoMayus}
  let nombre,apellidos,nombreCompleto,nombreCompletoLongitud,corte,indice,ultima,nombreCompletoMayus;
export const saludo = () => {
   nombre = prompt(
    `Buenos días, introduce tu nombre por favor:`
  ).trim();
  while (nombre === null || nombre === undefined || nombre.length <= 0) {
    nombre = prompt(`Buenos días, introduce tu nombre por favor:`).trim();
  }
   apellidos = prompt(`Por favor introduce tus apellidos`).trim();
  while (apellidos === null || apellidos === undefined) {
    apellidos = prompt(`Por favor introduce tus apellidos`).trim();
  }
 nombreCompleto = nombre.concat(" ", apellidos);
 nombreCompletoLongitud = nombreCompleto.length + 1;
 corte = nombreCompleto.substring(3);
 indice = nombreCompleto.toLocaleUpperCase().indexOf("A", 0);
 ultima = nombreCompleto.toLocaleUpperCase().lastIndexOf("A");
 nombreCompletoMayus = nombreCompleto.toUpperCase();
};
