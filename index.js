// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert
//que diga “Hello World”.

//alert('Hello World');

//2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga
//“Hello World” (document.write).
//document.write('Hello World');

//3.Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar

//document.write(3 + 5);
//console.log(3 + 5);

//4.Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y
//escriba un texto que diga “Hola nombreUsuario”
//let username = prompt('What is your name');
//document.write('Hola ' + username);

//5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el
//resultado de sumar estos dos números.
//let num1 = prompt('Escribe un número');
//let num2 = prompt('Escribe otro número');
//document.write('La suma es: ' + (parseInt(num1) + parseInt(num2)));

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor
/*let num1 = prompt('Escribe un número');
let num2 = prompt('Escribe otro número');
if (num1 > num2) {
  document.write(num1);
} else {
  document.write(num2);
}*/

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/*let num1 = prompt('Escribe un número');
let num2 = prompt('Escribe otro número');
let num3 = prompt('Escribí un tercer número');
if (num1 > num2 && num1 > num3) {
  document.write(num1);
} else if (num2 > num1 && num2 > num3) {
  document.write(num2);
} else {
  document.write(num3);
}*/

//8. Escribe un programa que pida un número y diga si es divisible por 2
/*var num1 = prompt('Escribe un número');
if (num1 % 2 === 0) {
  document.write('Es divisible por 2');
} else {
  document.write('No es divisible por 2');
}*/

//9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
/*let text = prompt('Escribe una frase');
let textVocals = text.match(/a/g);
let a = textVocals.length;
document.write(a);*/

//10. Escribe un programa que pida una frase y escriba las vocales que aparecen
/*let text = prompt("Escribe una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
document.write(text.substr(i,1);
}
}*/

//11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son
//vocales
//let text = prompt('Escribe una frase');
//var numeroVocales = text.match(/[aeiou]/gi).length;
//document.write(numeroVocales);

//12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de
//las vocales FALTA HACER ESTE
//let text = prompt('Escribe una frase');

//13.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
// (sólo hay que comprobar si lo es por uno de los cuatro)
/*let num1 = prompt('Escribe un número');
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
  document.write('Es divisible por 2, 3, 5 o 7');
} else {
  document.write('No es divisible por 2, 3, 5 ni 7');
}*/

//14.- Añadir al ejercicio anterior que nos diga por cual de los cuatro es
//divisible (hay que decir todos por los que es divisible)
/*var num1 = prompt('Escribe un número');
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
  if (num1 % 2 === 0) {
    document.write('Es divisible por 2. ');
  }
  if (num1 % 3 === 0) {
    document.write('Es divisible por 3. ');
  }
  if (num1 % 5 === 0) {
    document.write('Es divisible por 5. ');
  }
  if (num1 % 7 === 0) {
    document.write('Es divisible por 7. ');
  }
} else {
  document.write('No es divisible ni por 2, ni por 3, ni por 5, ni por 7');
}*/

//15.- Escribir un programa que escriba en pantalla los divisores de un número dado
/*let num = prompt('Escribe un número');
let i;
for (i = 2; i < num / 2; i++) {
  if (num % i === 0) {
    document.write(i, ', ');
  }
}*/

//16.- Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
/*let num1 = prompt('Escribe un número');
let num2 = prompt('Escribe otro número');
let menor;
let i;
if (num1 < num2) {
  menor = num1;
} else {
  menor = num2;
}
for (i = 2; i < menor / 2; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    document.write(i, ', ');
  }
}*/

//17.- Escribir un programa que nos diga si un número dado es primo
//(no es divisible por ninguno otro número que no sea él mismo o la unidad)
/*let num1 = prompt('Escribe un número');
let i;
let numPrimo = true;
for (i = 2; i < num1 / 2; i++) {
  if (num1 % i === 0) {
    numPrimo === false;
  }
}
if (numPrimo) {
  document.write('el número es primo');
} else {
  document.write('el número no es primo');
}*/

/*EJERCICIOS CON STRING Y ARRAY */
//Ejercicio 1: cree un array con todas las edades de los estudiantes de su clase.
// Itere el array utilizando un bucle while y luego imprima todas las edades en la consola.

/*let ages = [18, 19, 22, 25, 28, 30, 31, 33, 35, 39];
let i = 0;

while (i < ages.length) {
  i++;
  console.log(ages[i]);
}*/

//Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo
//números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".

/*let ages = [17, 19, 22, 25, 28, 30, 31, 33, 35, 39, 48];
let i = 0;

while (i < ages.length) {
  i++;
  if (ages[i] % 2 === 0) {
    console.log(ages[i]);
  }
}*/

/*//Ejercicio 3: escriba una función que reciba un array como parámetro e imprima el número
//más bajo de la array en la consola

function arrayMasBajo(array) {
  const arrayOrdenado = array.sort((a, b) => a - b);
  console.log(arrayOrdenado[0]);
}

//Ejercicio 4: escriba una función que reciba un array como parámetro e imprima el número
//más grande de la array en la consola.
function arrayMasAlto(array) {
  const arrayOrdenado = array.sort((a, b) => b - a);
  console.log(arrayOrdenado[0]);
}

const resultado = arrayMasBajo([40, 10, 30, 20, 25]);
const resultado2 = arrayMasAlto([25, 55, 38, 80, 12]);
*/

//Ejercicio 5: Escriba una función que reciba dos parámetros, una array y un índice. La
//función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola.

/*var array = [3, 6, 67, 6, 23, 0, 17];
var index = 1;

function arrayIndex(array, index) {
  const resultado = array[index];
  return resultado;
}
console.log(arrayIndex(array, index));*/

//Ejercicio 6: Escriba una función que reciba una array y solo imprima los valores que se
//repiten.

/*const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort();
  console.log(sorted_arr);
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(`The duplicates are ${findDuplicates(duplicatedArray)}`);*/

//Ejercicio 7: escriba una función de JavaScript simple para unir todos los elementos de la
//siguiente array en una cadena.
//Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco", "Negro"

/*let myColor = ['Red', 'Green', 'White', 'Black'];
function unirElementos(elementos) {
  const result = elementos.join(' , ');
  return result;
}
console.log(unirElementos(myColor));*/

//Ejercicio 8: escriba una función de JavaScript que invierta un número. Por ejemplo, si x =
//32443, la salida debería ser 34423.

/*let num = 25289;

function reverseNum(n) {
  n = n + '';
  return n.split('').reverse().join('');
}

console.log(reverseNum(num));

//Da como resultado 98252*/

//Ejercicio 9: escriba una función de JavaScript que devuelva una cadena en orden alfabético.
//Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los
//números no se pasan en la cadena.

//Esto se hace en 3 pasos: Convierto el string en array con el split.
//Aplico el sort, para ordenarlo.
//Vuelvo a convertirlo en un string con el join

/*let word = 'crazymadafakka';

function sortAlphabetically(palabra) {
  return palabra.split('').sort().join('');
}

console.log(sortAlphabetically(word));*/

//Ejercicio 10: escriba una función de JavaScript que convierta la primera letra de cada
//palabra a mayúsculas. Por ejemplo, si x = "prince of persia", la salida debería ser
//"Prince Of Persia".

/*let game = 'prince of persia';

function firstLetterToUppercase(phrase) {
  return phrase
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(firstLetterToUppercase(game));*/

//Ejercicio 11: escriba una función de JavaScript que busque la palabra más larga de una frase.
//Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".

/*let phrase = 'Tutorial de desarrollo web';

function searchLargerWord(str) {
  let longestWord = str.split(' ').sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}

console.log(searchLargerWord(phrase));*/

//EJERCICIOS DE FUNCIONES
//1. Realizar una función, a la que se le pase como parámetro un número N, y muestre
//por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”

/*let mensaje = 'Bienvenidos al curso Full Stack';

function cursoFullStack(string, n) {
  if (n > 0) return string.repeat(n);
  else return '';
}

console.log(cursoFullStack(mensaje, 3));*/

//2. Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.

function calculateMax(num1, num2) {
  num1 > num2 ? console.log(num1) : console.log(num2);
}
calculateMax(10, 20);
