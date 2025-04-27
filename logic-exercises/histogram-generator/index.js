/*
Escriba un programa en JavaScript que contenga un array con números enteros (del 1 al 5) que pueden estar repetidos 
y genere en la consola (o en la terminal) un histograma que represente cuánto se repite cada número.

Debe mostrar la frecuencia para todos los números, incluso si no están presentes en el array.
Puede asumir que el array tendrá una longitud corta (hasta 20 números).

Ejemplo:
Entrada:
const numeros = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];

Salida esperada en consola:
1: *****
2: **
3: **
4:
5: *
*/

const numbers = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];

let countNumber1 = 0;
let countNumber2 = 0;
let countNumber3 = 0;
let countNumber4 = 0;
let countNumber5 = 0;

for (const number of numbers) {
  if (number === 1) {
    countNumber1++;
  } else if (number === 2) {
    countNumber2++;
  } else if (number === 3) {
    countNumber3++;
  } else if (number === 4) {
    countNumber4++;
  } else if (number === 5) {
    countNumber5++;
  }
}

console.log(`1: ${"*".repeat(countNumber1)}`);
console.log(`2: ${"*".repeat(countNumber2)}`);
console.log(`3: ${"*".repeat(countNumber3)}`);
console.log(`4: ${"*".repeat(countNumber4)}`);
console.log(`5: ${"*".repeat(countNumber5)}`);
