export { coseno, numeroMayor, numeroAleatorio };
let coseno, numeroMayor, nums,numeroAleatorio;

export const cos = () => {
  return (coseno = Math.cos(180 * (Math.PI / 180)));
};
export const numeros = () => {
  nums = [34, 67, 23, 75, 35, 19];
  return (numeroMayor = Math.max(...nums));
};

export let aleatorio = () => {
  return (numeroAleatorio = parseInt(Math.random()*101));
};
