//para la fecha

export let estacionNacimiento,edad;

export const estacion = () => {
  let dia = prompt("Por favor escriba el día en que nació (deben ser 2 dígitos)");
  let mes = prompt("Por favor escriba el mes en que nació (deben ser 2 dígitos)");

  const mesNumero = parseInt(mes);
  const diaNumero = parseInt(dia);

  if (isNaN(mesNumero) || isNaN(diaNumero) || mesNumero < 1 || mesNumero > 12 || diaNumero < 1 || diaNumero > 31) {
    return null; // Entrada inválida
  }

  if ((mesNumero === 3 && diaNumero >= 21) || (mesNumero === 4) || (mesNumero === 5) || (mesNumero === 6 && diaNumero <= 20)) {
    estacionNacimiento = "Primavera";
  } else if ((mesNumero === 6 && diaNumero >= 21) || (mesNumero === 7) || (mesNumero === 8) || (mesNumero === 9 && diaNumero <= 20)) {
    estacionNacimiento = "Verano";
  } else if ((mesNumero === 9 && diaNumero >= 21) || (mesNumero === 10) || (mesNumero === 11) || (mesNumero === 12 && diaNumero <= 20)) {
    estacionNacimiento = "Otoño";
  } else {
    estacionNacimiento = "Invierno";
  }

  return estacionNacimiento;
};

export const nacimiento = () => {
  const anioNacimiento = prompt("Por favor, escriba el año en que nació deben ser 4 digitos");
  while (isNaN(anioNacimiento) || anioNacimiento.length !== 4) {
    alert("Introduce correctamente los datos.")
    anioNacimiento = prompt("Por favor, escriba el año en que nació deben ser 4 digitos");
  }
  const fechaNacimiento = new Date(anioNacimiento, 0, 1);
  const fechaActual = new Date();

  edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  if (fechaActual < fechaNacimiento.setFullYear(fechaActual.getFullYear())) {
    edad--;
  }
};
