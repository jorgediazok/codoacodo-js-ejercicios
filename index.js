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

/*function calculateMax(num1, num2) {
  num1 > num2 ? console.log(num1) : console.log(num2);
}
calculateMax(10, 20);*/

//3. Crear una función que se llame promedio3, que reciba como parámetro tres valores y
// devuelva el promedio de los mismos.

/*function promedio3(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let avg = sum / 3;
  return avg;
}
console.log(promedio3(10, 20, 30));*/

//4. Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las
//notas leídas. ( aunque no se suele leer valores en una función)

/*let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function promedioNotas(nota) {
  let sum = nota.reduce((previous, current) => (current += previous));
  let avg = sum / nota.length;
  return avg;
}

console.log(promedioNotas(notas));*/

//5. Una función que se llame siguiente, que reciba como parámetro un valor entero, y
//devuelva el siguiente del número ingresado como parámetro

/*function siguiente(nextNum) {
  return nextNum + 1;
}

//6. Una función que se llame doble, que reciba como parámetro un valor, y devuelva el
//doble del número ingresado como parámetro.

function doble(num) {
  return num * 2;
}

//7. Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el
//valor del numero ingresado como parámetro elevado al cuadrado.

function cuadrado(num) {
  let value = num * num;
  return value;
}

//8. Una función que se denomine imprimirValores que dado un número por parámetro,
//imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas
//en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.

function imprimirValores(num) {
  let next = siguiente(num);
  console.log(next);
  let double = doble(num);
  console.log(double);
  let cuad = cuadrado(num);
  console.log(cuad);
}
console.log(imprimirValores(8));

//9. Una función que se denomine imprimirElDobleDelSiguiente que dado un número por
//parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas
//en los puntos 5) , 6) : siguiente, el doble .

function imprimirElDobleDelSiguiente(num) {
  let next = siguiente(num);
  let doubleOfNext = next * 2;
  return doubleOfNext;
}

console.log(imprimirElDobleDelSiguiente(10));

//10. Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un
//número por parámetro, imprima cual es el valor siguiente al el doble. Usando las
//funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado

function imprimirElDobleDelSiguienteAlCuadrado(num) {
  let next = siguiente(num);
  let doubleOfNext = next * 2;
  let powOfNext = doubleOfNext * doubleOfNext;
  return powOfNext;
}
console.log(imprimirElDobleDelSiguienteAlCuadrado(10));

//11 una función que dado la longitud de un lado de un cuadrado devuelva el perímetro
function perimetroDeUnCuadrado(long) {
  let perimetro = long * 4;
  return perimetro;
}
console.log(perimetroDeUnCuadrado(10)); //Debería devolver 16

// 12. una función que dado la longitud de un lado de un cuadrado devuelva la superficie.

function superficieDeUnCuadrado(long) {
  let superficie = long * long;
  return superficie;
}
console.log(superficieDeUnCuadrado(5));

// 13. una función que dado el radio de una círculo devuelva la circunferencia ( perimetro del
//circulo)

function perimetroDeUnCirculo(radio) {
  let perimetro = 2 * Math.PI * radio;
  return perimetro;
}
console.log(perimetroDeUnCirculo(10));

// 14. una función que dado el radio de una círculo devuelva el area del circulo

function areaDeUnCirculo(radio) {
  let area = Math.PI * (radio * radio);
  return area;
}
console.log(areaDeUnCirculo(10));

// FUNCIONES FECHA

//15. una función que dado un número de mes me devuelva la cantidad de días de ese
//mes(suponiendo que no es un año bisiesto)

function diasDelMes(año, mes) {
  return new Date(año, mes, 0).getDate();
}
console.log(diasDelMes(2, 2021));

//16. Una función que reciba como parámetro un año y diga si ese año es bisiesto (googlear
//cuando un año es bisiesto)

function esBisiesto(año) {
  let bisiesto = !(new Date(año, 1, 29).getMonth() - 1);
  return bisiesto;
}

console.log(esBisiesto(2024));

//17. una función que reciba el dia, mes y año y me devuelva la cantidad de días de ese mes

//18. una función que reciba dia,mes y año y devuelva el dia siguiente

// 19. una función que reciba dia,mes y año y devuelva el dia anterior
function diaProximo(año, mes, dia) {
  let day = new Date(año, mes, dia).toDateString();
  let nextDay = day + 1;
  return nextDay;
}
console.log(diaProximo(2020, 10, 17));

//20. una función que se llame ultimoDiaDelMes que reciba díia,mes y año y devuelva el
//último día del mes

function ultimoDiaDelMes(año, mes) {
  return new Date(año, mes, 0).getDate();
}
console.log(ultimoDiaDelMes(2020, 11));
*/

//Numeros dobles
/*let numeros = [10, 20, 30, 40, 50];

let numerosDobles = numeros.map((numero) => {
  return numero * 2;
});

console.log(numerosDobles);*/

/* let num = 12;

if (num <= 15) {
  console.log(`${num} es menor o igual a 15`);
} else {
  console.log(`${num} es mayor a 15`);
} */

// function myFunction(a, b) {
//   return a * b;
// }

// var x = myFunction(myFunction(4, 3), myFunction(4, 3));

// console.log(x);

// for (var j = 0; j < 2; j++) {}

// console.log(j);
/* 
let x = 10;

const promise = new Promise((resolve, reject) => {
  if (x === 20) {
    resolve('La variable es igual a 20');
  } else {
    reject('La variable no es igual a 20');
  }
})
  .then((res) => {
    console.log('success ' + res);
  })
  .catch((error) => {
    console.log('error:' + error);
  });
 */
/* 
fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => console.log(data.results))
  .catch((error) => console.log(error));
 */
/* 
let myFunction = (age) => {
  const isAdult = age >= 18 ? 'The person is Adult' : 'The person is underage';
  console.log(isAdult);
};

myFunction(17);
//Devuelve "The person is underage"
 */

/* const arrayOfNumbers = [7, 9, 14, 28, 10, 87, 91];

const newArray = arrayOfNumbers.map((number) => {
  return number * 10;
});

console.log(arrayOfNumbers);
console.log(newArray);

//Devuelve el mismo dos arrays , el primero sigue
//manteniendo los números y el nuevo los multiplica x 10

const filteredArray = arrayOfNumbers.filter((number) => {
  return number >= 14;
});

console.log(filteredArray); */
// let person = '{"name":"Alejandro", "age":25, "city":"Buenos Aires"}';
// const parsedPerson = JSON.parse(person);
// console.log(parsedPerson.name);

// //Devuelve "Alejandro"
// let person2 = { name: 'Juan', age: 43, city: 'Barcelona' };
// const stringPerson = JSON.stringify(person2);
// console.log(stringPerson);
// //Devuelve un JSON

//BEGINNING OF NEW EXERCISES ON JANUARY
//https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&ab_channel=JuniorDeveloperCentral

//Exercise 1: Escribir un programa de js que chequee dos numeros que retorne
//true si uno de los dos es 100 o si la suma de los dos es 100

// const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

// console.log(isEqualTo100(100, 10)); //true
// console.log(isEqualTo100(25, 13)); //false
// console.log(isEqualTo100(20 + 80)); //true
// console.log(isEqualTo100(20 + 70)); //false

//Exercise 2: Write a JS program to get the extension of a filename

// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtension('index.html'));

//Exercise 3: Write a JS program to replace every character in a given
//string with the character following it in the alphabet!!

//Split me separa los caracteres de un array "h" "e" "l" "l""o"
//Con el map loopeo en ese array de caracteres y por cada caracter
//chequeo con el String.fromCharCode que numero representa la letra, por
//ejemplo la A es 65, la B 66. Con el charCodeAt(0) elijo el string y le
//sumo uno. Finalmente uno el string de nuevo con join.

// const moveCharsForward = (str) =>
//   str
//     .split('')
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join();

// console.log(moveCharsForward('hello'));

//Exercise 4: Write a JS program to get the current date. Expected output
//mm-dd-yyy, mm/dd/yy or dd-mm-yyyy, dd/mm/yy

// const formatDate = (date = new Date()) => {
//   const days = date.getDate();
//   const months = date.getMonth() + 1;
//   const years = date.getFullYear();
//   return `${days}/${months}/${years}`;
// };

// console.log(formatDate());

//Exercise 5: Write a JS program to create a new string adding "New!" in front
//of a given string. If the given string begins with "New!" already then return
//the original string

// const addNew = (str) => (str.indexOf('New!') === 0 ? str : `New! ${str}`); //Agrega el new adelante de la palabra

// console.log(addNew('New! New! Offers'));

//Exercise 6: Write a JS program to create a new string from a given string taking the
//first 3 characters and the last 3 characters of a string and adding
//them together. The string length must be 3 or more, if not, the original
//string is returned

// const makeNewString = (str) =>
//   str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(makeNewString('maradona'));

//Exercise 7: Write a JS program to extract the first half of a
//string of even length

// const firstHalf = (str) => str.slice(0, str.length / 2);

// console.log(firstHalf('Escoliosisi')); //Returns escol

//Exercise 7: Write a JS program to concatenate two strings except their
//First character

// const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);
// console.log(concatenate('junior', 'developer'));

//Exercise 4: Given two values, write a JS program to find out which one is
//nearest to 100

// const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

// console.log(closeTo100(20, 10));

//Exercise 5: Write a JS program to check a given string contains
//2 to 4 occurrences of a specified character.

// const countChars = (str, char) =>
//   str.split('').filter((ch) => ch === char).length;

// const contains2to4 = (str, char) =>
//   countChars(str, char) >= 2 && countChars(str, char) <= 4;

// console.log(countChars('hello', 'l'));
// console.log(contains2to4('hello', 'l'));

//Rellena un array con los numeros del 1 al 10. Muestralo por consola.

// let array = [];
// // for (i = 1; i <= 10; i++) {
// //   array.push(i);
// // }
// // console.log(array);

// //Rellena un array con numeros aleatorios (10 por ejemñplo).

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// for (let i = 1; i <= 10; i++) {
//   array.push(getRandomInt(1, 100));
// }

// console.log(array);

// let palabra = 'Hello World';

// let arrayIndex = palabra.indexOf('World');

// console.log(arrayIndex);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']; // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Argentina']; // array of strings, countries

// // Print the array and its length

// console.log('Numbers:', numbers);
// console.log('Number of numbers:', numbers.length);

// console.log('Fruits:', fruits);
// console.log('Number of fruits:', fruits.length);

// console.log('Vegetables:', vegetables);
// console.log('Number of vegetables:', vegetables.length);

// console.log('Animal products:', animalProducts);
// console.log('Number of animal products:', animalProducts.length);

// console.log('Web technologies:', webTechs);
// console.log('Number of web technologies:', webTechs.length);

// console.log('Countries:', countries);
// console.log('Number of countries:', countries.length);

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companies = companiesString.split(',');

// console.log(companies); //

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// const words = txt.split(' ');
// console.log(words);

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 10; // changing 1 at index 0 to 10
// numbers[1] = 20; // changing  2 at index 1 to 20

// console.log(numbers); // [10, 20, 3, 4, 5]

//HERE GOES ALL THE METHODS

//SPLIT
// let js = 'JavaScript';
// const charsInJavaScript = js.split('');

// console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companies = companiesString.split(',');

// console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// const words = txt.split(' ');

// //ARRAY

// const arr = Array(); // creates an an empty array
// console.log(arr);

// const eightXvalues = Array(8).fill('X'); // it creates eight element values filled with 'X'
// console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
// console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
// console.log(four4values); // [4, 4, 4, 4]

// //CONCAT
// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];
// const thirdList = firstList.concat(secondList);

// console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables); // concatenate the two arrays

// console.log(fruitsAndVegetables);

//LENGTH

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length); // -> 5 is the size of the array

// //INDEX OF indexOf:To check if an item exist in an array.
// //If it exists it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.indexOf(5)); // -> 4
// console.log(numbers.indexOf(0)); // -> -1
// console.log(numbers.indexOf(1)); // -> 0
// console.log(numbers.indexOf(6)); // -> -1

// let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let index = fruits.indexOf('banana'); // 0

// // if (index != -1) {
// //   console.log('This fruit does exist in the array');
// // } else {
// //   console.log('This fruit does not exist in the array');
// // }
// // This fruit does exist in the array
// // we can use also ternary here
// index != -1
//   ? console.log('This fruit does exist in the array')
//   : console.log('This fruit does not exist in the array');

// // let us check if a avocado exist in the array
// let indexOfAvocado = fruits.indexOf('avocado'); // -1, if the element not found index is -1
// if (indexOfAvocado != -1) {
//   console.log('This fruit does exist in the array');
// } else {
//   console.log('This fruit does not exist in the array');
// }
// // This fruit does not exist in the array

//LASTINDEX OF It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

// console.log(numbers.lastIndexOf(2)); // 7
// console.log(numbers.lastIndexOf(0)); // -1
// console.log(numbers.lastIndexOf(1)); //  6
// console.log(numbers.lastIndexOf(4)); //  3
// console.log(numbers.lastIndexOf(6)); // -1

//INCLUDES Checkea si incluye algo dentro del array y devuelve true or false
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(5)); // true
// console.log(numbers.includes(0)); // false
// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(6)); // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ]; // List of web technologies

// console.log(webTechs.includes('Node')); // true
// console.log(webTechs.includes('C')); // false

//IS ARRAY: Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

//TO STRING: Converts an array in string
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString()); // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

//JOIN: join: It is used to join the elements of the array, the argument we passed
// in the join method will be joined in the array and return as a string. By default,
//it joins with a comma, but we can pass different string parameter which can be joined
//between the items.

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join()); // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

// console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')); //AsabenehMathiasEliasBrook
// console.log(names.join(' ')); //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ]; // List of web technologies

// console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # ')); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

//SLICE Slice: To cut out a multiple items in range.
//It takes two parameters:starting and ending position. It doesn't include the ending position.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.slice()); // -> it copies all  item
// console.log(numbers.slice(0)); // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)); // it copies all  item
// console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

//SPLICE It takes three parameters:Starting position, number of times to
// be removed and number of items to be added.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.splice()); // -> remove all items
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(0, 1)); // remove the first item
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9]

//PUSH push an item in the end

// // syntax
// const arr = ['item1', 'item2', 'item3'];
// arr.push('new item');

// console.log(arr);
// // ['item1', 'item2','item3','new item']
// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// console.log(numbers); // -> [1,2,3,4,5,6]

// numbers.pop(); // -> remove one item from the end
// console.log(numbers); // -> [1,2,3,4,5]
// let fruits = ['banana', 'orange', 'mango', 'lemon'];
// fruits.push('apple');

// console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple']

// fruits.push('lime');
// console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// //POP remove item from the end

// const numbers = [1, 2, 3, 4, 5];
// numbers.pop(); // -> remove one item from the end

// console.log(numbers); // -> [1,2,3,4]

// //SHIFT remove an item on the beginning

// const numbers = [1, 2, 3, 4, 5];
// numbers.shift(); // -> remove one item from the beginning

// console.log(numbers); // -> [2,3,4,5]

// //UNSHIT add an item on the beginning
// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0); // -> add one item from the beginning

// console.log(numbers); // -> [0,1,2,3,4,5]

//REVERSE Reverse the order of an array
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // -> reverse array order

// console.log(numbers); // [5, 4, 3, 2, 1]

// numbers.reverse();
// console.log(numbers); // [1, 2, 3, 4, 5]

//SORT arrange array elements in ascending order. Sort takes a call back function,
//we will see how we use sort with a call back function in the coming sections

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];

// webTechs.sort();
// console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse(); // after sorting we can reverse it
// console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// //ARRAY OF ARRAY

// const firstNums = [1, 2, 3];
// const secondNums = [1, 4, 9];

// const arrayOfArray = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(arrayOfArray[0]); // [1, 2, 3]

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = [frontEnd, backEnd];
// console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length); // 2
// console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

//Exercise

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];

// //1 Declare an empty array

// let array = [];

// //2 Declare an array with more than 5 number of elements

// let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];

// //3 Find the length of the array

// console.log(arrayOfNumbers.length);

// //4 Get the first item, the middle item and the last item of the array
// const firstItem = arrayOfNumbers[0];
// const middleItem = arrayOfNumbers[3];
// const finalItem = arrayOfNumbers.length;

// console.log(firstItem, middleItem, finalItem);

// //5 Declare an array called mixedDataTypes, put different data types in the array
// //and find the length of the array. The array size should be greater than 5

// const mixedDataTypes = [13, false, 'Holly', undefined, true, 'warning'];
// console.log(mixedDataTypes.length);

// //6 Declare an array variable name itCompanies and assign initial values Facebook,
// // Google, Microsoft, Apple, IBM, Oracle and Amazon

// let itCompanies = ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// //7 Print the array using console.log()
// console.log(itCompanies);

// //8 Print the number of companies in the array
// console.log(itCompanies.length);

// //9 Print the first company, middle and last company
// console.log(itCompanies[0]);
// console.log(itCompanies[2]);
// console.log(itCompanies[5]);

// //10 Print out each company
// console.log(itCompanies.toString());

// //12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
// // IBM,Oracle and Amazon are big IT companies.

// let stringCompanies = itCompanies.toString();
// console.log(stringCompanies + ' are big IT companies');

// //13 Check if a certain company exists in the itCompanies array.
// //If it exist return the company else return a company is not found

// // let index = itCompanies.indexOf('Google');

// // index != -1
// //   ? console.log('This compnay exists in the array')
// //   : console.log('This company does not exist in the array');

// // //14 Sort companies

// // //const sortCompanies = itCompanies.sort();
// // console.log(sortCompanies);

// // //15 Reverse the array using reverse() method

// // const reversed = sortCompanies.reverse();
// // console.log(reversed);

// //16 Slice out the first 3 companies from the array

// const slicedCompanies = itCompanies.slice(3, 6);
// console.log(slicedCompanies);

// //17 Slice out the last 3 companies from the array
// const slicedCopanies2 = itCompanies.slice(0, 3);
// console.log(slicedCopanies2);

// //18 Slice out the middle IT company or companies from the array
// const slicedCompanies3 = itCompanies.slice(2, 4);
// console.log(slicedCompanies3);

// //19 Remove the first IT company from the array
// // const removedCompany = itCompanies.shift(0);
// // console.log(itCompanies);

// //20 Remove the middle IT company or companies from the array
// const removedMiddleCompany = itCompanies[2];
// console.log(removedMiddleCompany);
// console.log(itCompanies);

// //21 Remove the last IT company from the array
// // const removedLast = itCompanies.pop();
// // console.log(itCompanies);

// //22 Remove all IT companies
// const removeAll = itCompanies.splice(0, 6);
// console.log(itCompanies);
