// // 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert
// //que diga “Hello World”.

// //alert('Hello World');

// //2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga
// //“Hello World” (document.write).
// //document.write('Hello World');

// //3.Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar

// //document.write(3 + 5);
// //console.log(3 + 5);

// //4.Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
// let username = prompt('What is your name');
// document.write('Hola ' + username);

// //5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el
// //resultado de sumar estos dos números.
// //let num1 = prompt('Escribe un número');
// //let num2 = prompt('Escribe otro número');
// //document.write('La suma es: ' + (parseInt(num1) + parseInt(num2)));

// //6. Escribe un programa que pida dos números y escriba en la pantalla cual es
///el mayor
// let num1 = prompt('Escribe un número');
// let num2 = prompt('Escribe otro número');
// if (num1 > num2) {
//   document.write(num1);
// } else {
//   document.write(num2);
// }

// //7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// /*let num1 = prompt('Escribe un número');
// let num2 = prompt('Escribe otro número');
// let num3 = prompt('Escribí un tercer número');
// if (num1 > num2 && num1 > num3) {
//   document.write(num1);
// } else if (num2 > num1 && num2 > num3) {
//   document.write(num2);
// } else {
//   document.write(num3);
// }*/

// //8. Escribe un programa que pida un número y diga si es divisible por 2
// /*var num1 = prompt('Escribe un número');
// if (num1 % 2 === 0) {
//   document.write('Es divisible por 2');
// } else {
//   document.write('No es divisible por 2');
// }*/

// //9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// /*let text = prompt('Escribe una frase');
// let textVocals = text.match(/a/g);
// let a = textVocals.length;
// document.write(a);*/

// //10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// let text = prompt("Escribe una frase");
// let nText = text.length;
// let i;
// for (i = 0; i < nText; i++) {
// if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
// document.write(text.substr(i,1)}};

// //11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
// //let text = prompt('Escribe una frase');
// //var numeroVocales = text.match(/[aeiou]/gi).length;
// //document.write(numeroVocales);

// //12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de
// //las vocales FALTA HACER ESTE
// //let text = prompt('Escribe una frase');

// //13.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
// // (sólo hay que comprobar si lo es por uno de los cuatro)
// /*let num1 = prompt('Escribe un número');
// if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
//   document.write('Es divisible por 2, 3, 5 o 7');
// } else {
//   document.write('No es divisible por 2, 3, 5 ni 7');
// }*/

// //14.- Añadir al ejercicio anterior que nos diga por cual de los cuatro es
// //divisible (hay que decir todos por los que es divisible)
// /*var num1 = prompt('Escribe un número');
// if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
//   if (num1 % 2 === 0) {
//     document.write('Es divisible por 2. ');
//   }
//   if (num1 % 3 === 0) {
//     document.write('Es divisible por 3. ');
//   }
//   if (num1 % 5 === 0) {
//     document.write('Es divisible por 5. ');
//   }
//   if (num1 % 7 === 0) {
//     document.write('Es divisible por 7. ');
//   }
// } else {
//   document.write('No es divisible ni por 2, ni por 3, ni por 5, ni por 7');
// }*/

// //15.- Escribir un programa que escriba en pantalla los divisores de un número dado
// let num = prompt('Escribe un número');
// let i;
// for (i = 2; i < num / 2; i++) {
//   if (num % i === 0) {
//     document.write(i, ', ');
//   }
// }

// //16.- Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
// let num1 = prompt('Escribe un número');
// let num2 = prompt('Escribe otro número');
// let menor;
// let i;
// if (num1 < num2) {
//   menor = num1;
// } else {
//   menor = num2;
// }
// for (i = 2; i < menor / 2; i++) {
//   if (num1 % i === 0 && num2 % i === 0) {
//     document.write(i, ', ');
//   }
// }

// //17.- Escribir un programa que nos diga si un número dado es primo
// //(no es divisible por ninguno otro número que no sea él mismo o la unidad)
// /*let num1 = prompt('Escribe un número');
// let i;
// let numPrimo = true;
// for (i = 2; i < num1 / 2; i++) {
//   if (num1 % i === 0) {
//     numPrimo === false;
//   }
// }
// if (numPrimo) {
//   document.write('el número es primo');
// } else {
//   document.write('el número no es primo');
// }*/

// /*EJERCICIOS CON STRING Y ARRAY */
// //Ejercicio 1: cree un array con todas las edades de los estudiantes de su clase.
// // Itere el array utilizando un bucle while y luego imprima todas las edades en la consola.

// /*let ages = [18, 19, 22, 25, 28, 30, 31, 33, 35, 39];
// let i = 0;

// while (i < ages.length) {
//   i++;
//   console.log(ages[i]);
// }*/

// //Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".

// /*let ages = [17, 19, 22, 25, 28, 30, 31, 33, 35, 39, 48];
// let i = 0;

// while (i < ages.length) {
//   i++;
//   if (ages[i] % 2 === 0) {
//     console.log(ages[i]);
//   }
// }*/

// /*//Ejercicio 3: escriba una función que reciba un array como parámetro e imprima el número más bajo de la array en la consola

// function arrayMasBajo(array) {
//   const arrayOrdenado = array.sort((a, b) => a - b);
//   console.log(arrayOrdenado[0]);
// }
// arrayMasBajo([2, 4, 12, 9, 45]);

// //Ejercicio 4: escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola.
// function arrayMasAlto(array) {
//   const arrayOrdenado = array.sort((a, b) => b - a);
//   console.log(arrayOrdenado[0]);
// }

// const resultado = arrayMasBajo([40, 10, 30, 20, 25]);
// const resultado2 = arrayMasAlto([25, 55, 38, 80, 12]);
// */

// //Ejercicio 5: Escriba una función que reciba dos parámetros, una array y un índice. La función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola.

// /*var array = [3, 6, 67, 6, 23, 0, 17];
// var index = 1;

// function arrayIndex(array, index) {
//   const resultado = array[index];
//   return resultado;
// }
// console.log(arrayIndex(array, index));*/

// //Ejercicio 6: Escriba una función que reciba una array y solo imprima los valores que se repiten.

// /*const findDuplicates = (arr) => {
//   let sorted_arr = arr.slice().sort();
//   console.log(sorted_arr);
//   let results = [];
//   for (let i = 0; i < sorted_arr.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//       results.push(sorted_arr[i]);
//     }
//   }
//   return results;
// };

// let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// console.log(`The duplicates are ${findDuplicates(duplicatedArray)}`);*/

// //Ejercicio 7: escriba una función de JavaScript simple para unir todos los elementos de la
// //siguiente array en una cadena.
// //Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco", "Negro"

// /*let myColor = ['Red', 'Green', 'White', 'Black'];
// function unirElementos(elementos) {
//   const result = elementos.join(' , ');
//   return result;
// }
// console.log(unirElementos(myColor));*/

// //Ejercicio 8: escriba una función de JavaScript que invierta un número. Por ejemplo, si x =
// //32443, la salida debería ser 34423.

// /*let num = 25289;

// function reverseNum(n) {
//   n = n + '';
//   return n.split('').reverse().join('');
// }

// console.log(reverseNum(num));

// //Da como resultado 98252*/

// //Ejercicio 9: escriba una función de JavaScript que devuelva una cadena en orden alfabético.
// //Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los
// //números no se pasan en la cadena.

// //Esto se hace en 3 pasos: Convierto el string en array con el split.
// //Aplico el sort, para ordenarlo.
// //Vuelvo a convertirlo en un string con el join

// /*let word = 'crazymadafakka';

// function sortAlphabetically(palabra) {
//   return palabra.split('').sort().join('');
// }

// console.log(sortAlphabetically(word));*/

// //Ejercicio 10: escriba una función de JavaScript que convierta la primera letra de cada
// //palabra a mayúsculas. Por ejemplo, si x = "prince of persia", la salida debería ser
// //"Prince Of Persia".

// /*let game = 'prince of persia';

// function firstLetterToUppercase(phrase) {
//   return phrase
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }

// console.log(firstLetterToUppercase(game));*/

// //Ejercicio 11: escriba una función de JavaScript que busque la palabra más larga de una frase.
// //Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".

// /*let phrase = 'Tutorial de desarrollo web';

// function searchLargerWord(str) {
//   let longestWord = str.split(' ').sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return longestWord[0];
// }

// console.log(searchLargerWord(phrase));*/

// //EJERCICIOS DE FUNCIONES
// //1. Realizar una función, a la que se le pase como parámetro un número N, y muestre
// //por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”

// /*let mensaje = 'Bienvenidos al curso Full Stack';

// function cursoFullStack(string, n) {
//   if (n > 0) return string.repeat(n);
//   else return '';
// }

// console.log(cursoFullStack(mensaje, 3));*/

// //2. Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.

// /*function calculateMax(num1, num2) {
//   num1 > num2 ? console.log(num1) : console.log(num2);
// }
// calculateMax(10, 20);*/

// //3. Crear una función que se llame promedio3, que reciba como parámetro tres valores y
// // devuelva el promedio de los mismos.

// /*function promedio3(num1, num2, num3) {
//   let sum = num1 + num2 + num3;
//   let avg = sum / 3;
//   return avg;
// }
// console.log(promedio3(10, 20, 30));*/

// //4. Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las
// //notas leídas. ( aunque no se suele leer valores en una función)

// /*let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function promedioNotas(nota) {
//   let sum = nota.reduce((previous, current) => (current += previous));
//   let avg = sum / nota.length;
//   return avg;
// }

// console.log(promedioNotas(notas));*/

// //5. Una función que se llame siguiente, que reciba como parámetro un valor entero, y
// //devuelva el siguiente del número ingresado como parámetro

// /*function siguiente(nextNum) {
//   return nextNum + 1;
// }

// //6. Una función que se llame doble, que reciba como parámetro un valor, y devuelva el
// //doble del número ingresado como parámetro.

// function doble(num) {
//   return num * 2;
// }

// //7. Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el
// //valor del numero ingresado como parámetro elevado al cuadrado.

// function cuadrado(num) {
//   let value = num * num;
//   return value;
// }

// //8. Una función que se denomine imprimirValores que dado un número por parámetro,
// //imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas
// //en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.

// function imprimirValores(num) {
//   let next = siguiente(num);
//   console.log(next);
//   let double = doble(num);
//   console.log(double);
//   let cuad = cuadrado(num);
//   console.log(cuad);
// }
// console.log(imprimirValores(8));

// //9. Una función que se denomine imprimirElDobleDelSiguiente que dado un número por
// //parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas
// //en los puntos 5) , 6) : siguiente, el doble .

// function imprimirElDobleDelSiguiente(num) {
//   let next = siguiente(num);
//   let doubleOfNext = next * 2;
//   return doubleOfNext;
// }

// console.log(imprimirElDobleDelSiguiente(10));

// //10. Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un
// //número por parámetro, imprima cual es el valor siguiente al el doble. Usando las
// //funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado

// function imprimirElDobleDelSiguienteAlCuadrado(num) {
//   let next = siguiente(num);
//   let doubleOfNext = next * 2;
//   let powOfNext = doubleOfNext * doubleOfNext;
//   return powOfNext;
// }
// console.log(imprimirElDobleDelSiguienteAlCuadrado(10));

// //11 una función que dado la longitud de un lado de un cuadrado devuelva el perímetro
// function perimetroDeUnCuadrado(long) {
//   let perimetro = long * 4;
//   return perimetro;
// }
// console.log(perimetroDeUnCuadrado(10)); //Debería devolver 16

// // 12. una función que dado la longitud de un lado de un cuadrado devuelva la superficie.

// function superficieDeUnCuadrado(long) {
//   let superficie = long * long;
//   return superficie;
// }
// console.log(superficieDeUnCuadrado(5));

// // 13. una función que dado el radio de una círculo devuelva la circunferencia ( perimetro del
// //circulo)

// function perimetroDeUnCirculo(radio) {
//   let perimetro = 2 * Math.PI * radio;
//   return perimetro;
// }
// console.log(perimetroDeUnCirculo(10));

// // 14. una función que dado el radio de una círculo devuelva el area del circulo

// function areaDeUnCirculo(radio) {
//   let area = Math.PI * (radio * radio);
//   return area;
// }
// console.log(areaDeUnCirculo(10));

// // FUNCIONES FECHA

// //15. una función que dado un número de mes me devuelva la cantidad de días de ese
// //mes(suponiendo que no es un año bisiesto)

// function diasDelMes(año, mes) {
//   return new Date(año, mes, 0).getDate();
// }
// console.log(diasDelMes(2, 2021));

// //16. Una función que reciba como parámetro un año y diga si ese año es bisiesto (googlear
// //cuando un año es bisiesto)

// function esBisiesto(año) {
//   let bisiesto = !(new Date(año, 1, 29).getMonth() - 1);
//   return bisiesto;
// }

// console.log(esBisiesto(2024));

// //17. una función que reciba el dia, mes y año y me devuelva la cantidad de días de ese mes

// //18. una función que reciba dia,mes y año y devuelva el dia siguiente

// // 19. una función que reciba dia,mes y año y devuelva el dia anterior
// function diaProximo(año, mes, dia) {
//   let day = new Date(año, mes, dia).toDateString();
//   let nextDay = day + 1;
//   return nextDay;
// }
// console.log(diaProximo(2020, 10, 17));

// //20. una función que se llame ultimoDiaDelMes que reciba díia,mes y año y devuelva el
// //último día del mes

// function ultimoDiaDelMes(año, mes) {
//   return new Date(año, mes, 0).getDate();
// }
// console.log(ultimoDiaDelMes(2020, 11));
// */

// //Numeros dobles
// /*let numeros = [10, 20, 30, 40, 50];

// let numerosDobles = numeros.map((numero) => {
//   return numero * 2;
// });

// console.log(numerosDobles);*/

// /* let num = 12;

// if (num <= 15) {
//   console.log(`${num} es menor o igual a 15`);
// } else {
//   console.log(`${num} es mayor a 15`);
// } */

// // function myFunction(a, b) {
// //   return a * b;
// // }

// // var x = myFunction(myFunction(4, 3), myFunction(4, 3));

// // console.log(x);

// // for (var j = 0; j < 2; j++) {}

// // console.log(j);
// /*
// let x = 10;

// const promise = new Promise((resolve, reject) => {
//   if (x === 20) {
//     resolve('La variable es igual a 20');
//   } else {
//     reject('La variable no es igual a 20');
//   }
// })
//   .then((res) => {
//     console.log('success ' + res);
//   })
//   .catch((error) => {
//     console.log('error:' + error);
//   });
//  */
// /*
// fetch('https://randomuser.me/api/')
//   .then((response) => response.json())
//   .then((data) => console.log(data.results))
//   .catch((error) => console.log(error));
//  */
// /*
// let myFunction = (age) => {
//   const isAdult = age >= 18 ? 'The person is Adult' : 'The person is underage';
//   console.log(isAdult);
// };

// myFunction(17);
// //Devuelve "The person is underage"
//  */

// /* const arrayOfNumbers = [7, 9, 14, 28, 10, 87, 91];

// const newArray = arrayOfNumbers.map((number) => {
//   return number * 10;
// });

// console.log(arrayOfNumbers);
// console.log(newArray);

// //Devuelve el mismo dos arrays , el primero sigue
// //manteniendo los números y el nuevo los multiplica x 10

// const filteredArray = arrayOfNumbers.filter((number) => {
//   return number >= 14;
// });

// console.log(filteredArray); */
// // let person = '{"name":"Alejandro", "age":25, "city":"Buenos Aires"}';
// // const parsedPerson = JSON.parse(person);
// // console.log(parsedPerson.name);

// // //Devuelve "Alejandro"
// // let person2 = { name: 'Juan', age: 43, city: 'Barcelona' };
// // const stringPerson = JSON.stringify(person2);
// // console.log(stringPerson);
// // //Devuelve un JSON

// //BEGINNING OF NEW EXERCISES ON JANUARY
// //https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&ab_channel=JuniorDeveloperCentral

// //Exercise 1: Escribir un programa de js que chequee dos numeros que retorne
// //true si uno de los dos es 100 o si la suma de los dos es 100

// // const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

// // console.log(isEqualTo100(100, 10)); //true
// // console.log(isEqualTo100(25, 13)); //false
// // console.log(isEqualTo100(20 + 80)); //true
// // console.log(isEqualTo100(20 + 70)); //false

// //Exercise 2: Write a JS program to get the extension of a filename

// // const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// // console.log(getFileExtension('index.html'));

// //Exercise 3: Write a JS program to replace every character in a given
// //string with the character following it in the alphabet!!

// //Split me separa los caracteres de un array "h" "e" "l" "l""o"
// //Con el map loopeo en ese array de caracteres y por cada caracter
// //chequeo con el String.fromCharCode que numero representa la letra, por
// //ejemplo la A es 65, la B 66. Con el charCodeAt(0) elijo el string y le
// //sumo uno. Finalmente uno el string de nuevo con join.

// // const moveCharsForward = (str) =>
// //   str
// //     .split('')
// //     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
// //     .join();

// // console.log(moveCharsForward('hello'));

// //Exercise 4: Write a JS program to get the current date. Expected output
// //mm-dd-yyy, mm/dd/yy or dd-mm-yyyy, dd/mm/yy

// // const formatDate = (date = new Date()) => {
// //   const days = date.getDate();
// //   const months = date.getMonth() + 1;
// //   const years = date.getFullYear();
// //   return `${days}/${months}/${years}`;
// // };

// // console.log(formatDate());

// //Exercise 5: Write a JS program to create a new string adding "New!" in front
// //of a given string. If the given string begins with "New!" already then return
// //the original string

// // const addNew = (str) => (str.indexOf('New!') === 0 ? str : `New! ${str}`); //Agrega el new adelante de la palabra

// // console.log(addNew('New! New! Offers'));

// //Exercise 6: Write a JS program to create a new string from a given string taking the
// //first 3 characters and the last 3 characters of a string and adding
// //them together. The string length must be 3 or more, if not, the original
// //string is returned

// // const makeNewString = (str) =>
// //   str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// // console.log(makeNewString('maradona'));

// //Exercise 7: Write a JS program to extract the first half of a
// //string of even length

// // const firstHalf = (str) => str.slice(0, str.length / 2);

// // console.log(firstHalf('Escoliosisi')); //Returns escol

// //Exercise 7: Write a JS program to concatenate two strings except their
// //First character

// // const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);
// // console.log(concatenate('junior', 'developer'));

// //Exercise 4: Given two values, write a JS program to find out which one is
// //nearest to 100

// // const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

// // console.log(closeTo100(20, 10));

// //Exercise 5: Write a JS program to check a given string contains
// //2 to 4 occurrences of a specified character.

// // const countChars = (str, char) =>
// //   str.split('').filter((ch) => ch === char).length;

// // const contains2to4 = (str, char) =>
// //   countChars(str, char) >= 2 && countChars(str, char) <= 4;

// // console.log(countChars('hello', 'l'));
// // console.log(contains2to4('hello', 'l'));

// //Rellena un array con los numeros del 1 al 10. Muestralo por consola.

// // let array = [];
// // // for (i = 1; i <= 10; i++) {
// // //   array.push(i);
// // // }
// // // console.log(array);

// // //Rellena un array con numeros aleatorios (10 por ejemñplo).

// // function getRandomInt(min, max) {
// //   return Math.floor(Math.random() * (max - min)) + min;
// // }

// // for (let i = 1; i <= 10; i++) {
// //   array.push(getRandomInt(1, 100));
// // }

// // console.log(array);

// // let palabra = 'Hello World';

// // let arrayIndex = palabra.indexOf('World');

// // console.log(arrayIndex);

// // const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// // const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
// // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of strings, vegetables
// // const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']; // array of strings, products
// // const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; // array of web technologies
// // const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Argentina']; // array of strings, countries

// // // Print the array and its length

// // console.log('Numbers:', numbers);
// // console.log('Number of numbers:', numbers.length);

// // console.log('Fruits:', fruits);
// // console.log('Number of fruits:', fruits.length);

// // console.log('Vegetables:', vegetables);
// // console.log('Number of vegetables:', vegetables.length);

// // console.log('Animal products:', animalProducts);
// // console.log('Number of animal products:', animalProducts.length);

// // console.log('Web technologies:', webTechs);
// // console.log('Number of web technologies:', webTechs.length);

// // console.log('Countries:', countries);
// // console.log('Number of countries:', countries.length);

// // let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// // const companies = companiesString.split(',');

// // console.log(companies); //

// // let txt =
// //   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// // const words = txt.split(' ');
// // console.log(words);

// // const numbers = [1, 2, 3, 4, 5];
// // numbers[0] = 10; // changing 1 at index 0 to 10
// // numbers[1] = 20; // changing  2 at index 1 to 20

// // console.log(numbers); // [10, 20, 3, 4, 5]

// //HERE GOES ALL THE METHODS

// //SPLIT
// // let js = 'JavaScript';
// // const charsInJavaScript = js.split('');

// // console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// // let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// // const companies = companiesString.split(',');

// // console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// // let txt =
// //   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// // const words = txt.split(' ');

// // //ARRAY

// // const arr = Array(); // creates an an empty array
// // console.log(arr);

// // const eightXvalues = Array(8).fill('X'); // it creates eight element values filled with 'X'
// // console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

// // const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
// // console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// // const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
// // console.log(four4values); // [4, 4, 4, 4]

// // //CONCAT
// // const firstList = [1, 2, 3];
// // const secondList = [4, 5, 6];
// // const thirdList = firstList.concat(secondList);

// // console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// // const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of fruits
// // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of vegetables
// // const fruitsAndVegetables = fruits.concat(vegetables); // concatenate the two arrays

// // console.log(fruitsAndVegetables);

// //LENGTH

// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.length); // -> 5 is the size of the array

// // //INDEX OF indexOf:To check if an item exist in an array.
// // //If it exists it returns the index else it returns -1.

// // const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers.indexOf(5)); // -> 4
// // console.log(numbers.indexOf(0)); // -> -1
// // console.log(numbers.indexOf(1)); // -> 0
// // console.log(numbers.indexOf(6)); // -> -1

// // let us check if a banana exist in the array

// // const fruits = ['banana', 'orange', 'mango', 'lemon'];
// // let index = fruits.indexOf('banana'); // 0

// // // if (index != -1) {
// // //   console.log('This fruit does exist in the array');
// // // } else {
// // //   console.log('This fruit does not exist in the array');
// // // }
// // // This fruit does exist in the array
// // // we can use also ternary here
// // index != -1
// //   ? console.log('This fruit does exist in the array')
// //   : console.log('This fruit does not exist in the array');

// // // let us check if a avocado exist in the array
// // let indexOfAvocado = fruits.indexOf('avocado'); // -1, if the element not found index is -1
// // if (indexOfAvocado != -1) {
// //   console.log('This fruit does exist in the array');
// // } else {
// //   console.log('This fruit does not exist in the array');
// // }
// // // This fruit does not exist in the array

// //LASTINDEX OF It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// // const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

// // console.log(numbers.lastIndexOf(2)); // 7
// // console.log(numbers.lastIndexOf(0)); // -1
// // console.log(numbers.lastIndexOf(1)); //  6
// // console.log(numbers.lastIndexOf(4)); //  3
// // console.log(numbers.lastIndexOf(6)); // -1

// //INCLUDES Checkea si incluye algo dentro del array y devuelve true or false
// // const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers.includes(5)); // true
// // console.log(numbers.includes(0)); // false
// // console.log(numbers.includes(1)); // true
// // console.log(numbers.includes(6)); // false

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB',
// // ]; // List of web technologies

// // console.log(webTechs.includes('Node')); // true
// // console.log(webTechs.includes('C')); // false

// //IS ARRAY: Array.isArray:To check if the data type is an array

// // const numbers = [1, 2, 3, 4, 5]
// // console.log(Array.isArray(numbers)) // true

// // const number = 100
// // console.log(Array.isArray(number)) // false

// //TO STRING: Converts an array in string
// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.toString()); // 1,2,3,4,5

// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// // console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// //JOIN: join: It is used to join the elements of the array, the argument we passed
// // in the join method will be joined in the array and return as a string. By default,
// //it joins with a comma, but we can pass different string parameter which can be joined
// //between the items.

// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.join()); // 1,2,3,4,5

// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

// // console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
// // console.log(names.join('')); //AsabenehMathiasEliasBrook
// // console.log(names.join(' ')); //Asabeneh Mathias Elias Brook
// // console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook
// // console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB',
// // ]; // List of web technologies

// // console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// // console.log(webTechs.join(' # ')); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// //SLICE Slice: To cut out a multiple items in range.
// //It takes two parameters:starting and ending position. It doesn't include the ending position.

// // const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers.slice()); // -> it copies all  item
// // console.log(numbers.slice(0)); // -> it copies all  item
// // console.log(numbers.slice(0, numbers.length)); // it copies all  item
// // console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

// //SPLICE It takes three parameters:Starting position, number of times to
// // be removed and number of items to be added.

// // const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers.splice()); // -> remove all items
// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.splice(0, 1)); // remove the first item
// // const numbers = [1, 2, 3, 4, 5, 6];
// // console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9]

// //PUSH push an item in the end

// // // syntax
// // const arr = ['item1', 'item2', 'item3'];
// // arr.push('new item');

// // console.log(arr);
// // // ['item1', 'item2','item3','new item']
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.push(6);

// // console.log(numbers); // -> [1,2,3,4,5,6]

// // numbers.pop(); // -> remove one item from the end
// // console.log(numbers); // -> [1,2,3,4,5]
// // let fruits = ['banana', 'orange', 'mango', 'lemon'];
// // fruits.push('apple');

// // console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple']

// // fruits.push('lime');
// // console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// // //POP remove item from the end

// // const numbers = [1, 2, 3, 4, 5];
// // numbers.pop(); // -> remove one item from the end

// // console.log(numbers); // -> [1,2,3,4]

// // //SHIFT remove an item on the beginning

// // const numbers = [1, 2, 3, 4, 5];
// // numbers.shift(); // -> remove one item from the beginning

// // console.log(numbers); // -> [2,3,4,5]

// // //UNSHIT add an item on the beginning
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.unshift(0); // -> add one item from the beginning

// // console.log(numbers); // -> [0,1,2,3,4,5]

// //REVERSE Reverse the order of an array
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.reverse(); // -> reverse array order

// // console.log(numbers); // [5, 4, 3, 2, 1]

// // numbers.reverse();
// // console.log(numbers); // [1, 2, 3, 4, 5]

// //SORT arrange array elements in ascending order. Sort takes a call back function,
// //we will see how we use sort with a call back function in the coming sections

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB',
// // ];

// // webTechs.sort();
// // console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// // webTechs.reverse(); // after sorting we can reverse it
// // console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// // //ARRAY OF ARRAY

// // const firstNums = [1, 2, 3];
// // const secondNums = [1, 4, 9];

// // const arrayOfArray = [
// //   [1, 2, 3],
// //   [1, 2, 3],
// // ];
// // console.log(arrayOfArray[0]); // [1, 2, 3]

// // const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// // const backEnd = ['Node', 'Express', 'MongoDB'];
// // const fullStack = [frontEnd, backEnd];
// // console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// // console.log(fullStack.length); // 2
// // console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
// // console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

// //Exercise

// // const countries = [
// //   'Albania',
// //   'Bolivia',
// //   'Canada',
// //   'Denmark',
// //   'Ethiopia',
// //   'Finland',
// //   'Germany',
// //   'Hungary',
// //   'Ireland',
// //   'Japan',
// //   'Kenya',
// // ];

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB',
// // ];

// // //1 Declare an empty array

// // let array = [];

// // //2 Declare an array with more than 5 number of elements

// // let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];

// // //3 Find the length of the array

// // console.log(arrayOfNumbers.length);

// // //4 Get the first item, the middle item and the last item of the array
// // const firstItem = arrayOfNumbers[0];
// // const middleItem = arrayOfNumbers[3];
// // const finalItem = arrayOfNumbers.length;

// // console.log(firstItem, middleItem, finalItem);

// // //5 Declare an array called mixedDataTypes, put different data types in the array
// // //and find the length of the array. The array size should be greater than 5

// // const mixedDataTypes = [13, false, 'Holly', undefined, true, 'warning'];
// // console.log(mixedDataTypes.length);

// // //6 Declare an array variable name itCompanies and assign initial values Facebook,
// // // Google, Microsoft, Apple, IBM, Oracle and Amazon

// // let itCompanies = ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// // //7 Print the array using console.log()
// // console.log(itCompanies);

// // //8 Print the number of companies in the array
// // console.log(itCompanies.length);

// // //9 Print the first company, middle and last company
// // console.log(itCompanies[0]);
// // console.log(itCompanies[2]);
// // console.log(itCompanies[5]);

// // //10 Print out each company
// // console.log(itCompanies.toString());

// // //12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
// // // IBM,Oracle and Amazon are big IT companies.

// // let stringCompanies = itCompanies.toString();
// // console.log(stringCompanies + ' are big IT companies');

// // //13 Check if a certain company exists in the itCompanies array.
// // //If it exist return the company else return a company is not found

// // // let index = itCompanies.indexOf('Google');

// // // index != -1
// // //   ? console.log('This compnay exists in the array')
// // //   : console.log('This company does not exist in the array');

// // // //14 Sort companies

// // // //const sortCompanies = itCompanies.sort();
// // // console.log(sortCompanies);

// // // //15 Reverse the array using reverse() method

// // // const reversed = sortCompanies.reverse();
// // // console.log(reversed);

// // //16 Slice out the first 3 companies from the array

// // const slicedCompanies = itCompanies.slice(3, 6);
// // console.log(slicedCompanies);

// // //17 Slice out the last 3 companies from the array
// // const slicedCopanies2 = itCompanies.slice(0, 3);
// // console.log(slicedCopanies2);

// // //18 Slice out the middle IT company or companies from the array
// // const slicedCompanies3 = itCompanies.slice(2, 4);
// // console.log(slicedCompanies3);

// // //19 Remove the first IT company from the array
// // // const removedCompany = itCompanies.shift(0);
// // // console.log(itCompanies);

// // //20 Remove the middle IT company or companies from the array
// // const removedMiddleCompany = itCompanies[2];
// // console.log(removedMiddleCompany);
// // console.log(itCompanies);

// // //21 Remove the last IT company from the array
// // // const removedLast = itCompanies.pop();
// // // console.log(itCompanies);

// // //22 Remove all IT companies
// // const removeAll = itCompanies.splice(0, 6);
// // console.log(itCompanies);

// //SWITCH

// // let weather = 'sunny';
// // switch (weather) {
// //   case 'rainy':
// //     console.log('You need a rain coat.');
// //     break;
// //   case 'cloudy':
// //     console.log('It might be cold, you need a jacket.');
// //     break;
// //   case 'sunny':
// //     console.log('Go out freely.');
// //     break;
// //   default:
// //     console.log(' No need for rain coat.');
// // }

// // console.log(weather);

// // let dayUserInput = prompt('What day is today ?');
// // let day = dayUserInput.toLowerCase();

// // switch (day) {
// //   case 'monday':
// //     console.log('Today is Monday');
// //     break;
// //   case 'tuesday':
// //     console.log('Today is Tuesday');
// //     break;
// //   case 'wednesday':
// //     console.log('Today is Wednesday');
// //     break;
// //   case 'thursday':
// //     console.log('Today is Thursday');
// //     break;
// //   case 'friday':
// //     console.log('Today is Friday');
// //     break;
// //   case 'saturday':
// //     console.log('Today is Saturday');
// //     break;
// //   case 'sunday':
// //     console.log('Today is Sunday');
// //     break;
// //   default:
// //     console.log('It is not a week day.');
// // }

// // Examples to use conditions in the cases

// // let num = prompt('Enter number');
// // switch (true) {
// //   case num > 0:
// //     console.log('Number is positive');
// //     break;
// //   case num == 0:
// //     console.log('Numbers is zero');
// //     break;
// //   case num < 0:
// //     console.log('Number is negative');
// //     break;
// //   default:
// //     console.log('Entered value was not a number');
// // }

// //EXERCISE WITH SWITCH
// //Ex 1
// //Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// //give feedback:'You are old enough to drive' but if not 18 give
// //another feedback stating to wait for the number of years he needs to turn 18.

// // let num = prompt('Enter Your Age');
// // num >= 18
// //   ? console.log('You are old enough to drive')
// //   : console.log('Wait until you turn 18.');

// //Ex 2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log
// //the result to console stating
// // who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// // let myAge = 36;

// // let yourAge = prompt('Enter Your Age');

// // if (yourAge > myAge) {
// //   console.log(`You are ${yourAge - myAge} year/s older than me`);
// // } else if (yourAge < myAge) {
// //   console.log(`You are ${myAge - yourAge} year/s younger than me`);
// // } else {
// //   console.log('You are my age');
// // }

// //Ex 3 If a is greater than b return 'a is greater than b' else 'a is less than b'.
// // Try to implement it in two ways

// // a = 30;
// // b = 15;

// // a > b ? console.log('a is greater than b') : console.log('a is less than b');

// //Loops
// // for (let i = 0; i < 6; i++) {
// //   console.log(i);
// // }
// //

// // let sum = 0;
// // for (let i = 0; i < 10; i += 2) {
// //   sum += i;
// // }
// // console.log(sum);

// // //

// // let total = 0;
// // for (let i = 0; i < 101; i++) {
// //   if (i % 2 == 0) {
// //     total += i;
// //   }
// // }
// // console.log(total);

// //This code iterates through the array

// // const nums = [1, 2, 3, 4, 5];
// // for (let i = 0; i <= 4; i++) {
// //   console.log(nums[i]);
// // }

// //This code prints 5 to 0. Looping in reverse order

// // for (let i = 5; i >= 0; i--) {
// //   console.log(i);
// // }

// //WHILE We use the while loop when we do not know how man iteration we go in advance.

// // let count = prompt('Enter a positive number: ');
// // while (count > 0) {
// //   console.log(count);
// //   count--;
// // }

// //FOR OF

// // const numbers = [1, 2, 3, 4, 5];
// // for (const number of numbers) {
// //   console.log(number);
// // }

// // const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// // for (const country of countries) {
// //   console.log(country.toUpperCase());
// // }

// //FOR EACH
// //If we are interested in the index of the array forEach is preferable to for of loop.
// // The forEach array method takes a callback function,
// // //the callback function takes three arguments: the item, the index and the array itself.

// // const numbers = [1, 2, 3, 4, 5];
// // numbers.forEach((number, i) => {
// //   console.log(number, i);
// // });

// // const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// // // countries.forEach((country, i, arr) => {
// // //   console.log(i, country.toUpperCase());
// // // });

// // //FOR IN
// // // const user = {
// // //   firstName: 'Asabeneh',
// // //   lastName: 'Yetayeh',
// // //   age: 250,
// // //   country: 'Finland',
// // //   skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
// // // };

// // // for (const key in user) {
// // //   console.log(key, user[key]);
// // // }

// // //OBJECTS

// // // const person = {
// // //   firstName: 'Asabeneh',
// // //   lastName: 'Yetayeh',
// // //   age: 250,
// // //   country: 'Finland',
// // //   city: 'Helsinki',
// // //   skills: [
// // //     'HTML',
// // //     'CSS',
// // //     'JavaScript',
// // //     'React',
// // //     'Node',
// // //     'MongoDB',
// // //     'Python',
// // //     'D3.js',
// // //   ],
// // //   isMarried: true,
// // // };
// // // console.log(person.skills[2]);

// // //COPY AN OBJECT WITH ASSIGN
// // const person = {
// //   firstName: 'Asabeneh',
// //   age: 250,
// //   country: 'Finland',
// //   city: 'Helsinki',
// //   skills: ['HTML', 'CSS', 'JS'],
// //   title: 'teacher',
// //   address: {
// //     street: 'Heitamienkatu 16',
// //     pobox: 2002,
// //     city: 'Helsinki',
// //   },
// //   getPersonInfo: function () {
// //     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
// //   },
// // };

// // // //Object methods: Object.assign, Object.keys, Object.values, Object.entries
// // // //hasOwnProperty

// // const copyPerson = Object.assign({}, person);
// // console.log(copyPerson);

// // //OBJECT KEYS: Object.keys: To get the keys or properties of an object as an array
// // const keys = Object.keys(copyPerson);
// // console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
// // const address = Object.keys(copyPerson.address);
// // console.log(address); //['street', 'pobox', 'city']

// //FUNCTIONS
// // function printFullName() {
// //   let firstName = 'Asabeneh';
// //   let lastName = 'Yetayeh';
// //   let space = ' ';
// //   let fullName = firstName + space + lastName;
// //   return fullName;
// // }
// // console.log(printFullName());

// // function addTwoNumbers() {
// //   let numOne = 2;
// //   let numTwo = 3;
// //   let total = numOne + numTwo;
// //   return total;
// // }

// // console.log(addTwoNumbers());

// // //Con parametro

// // function areaOfCircle(r) {
// //   let area = Math.PI * r * r
// //   return area
// // }

// // console.log(areaOfCircle(10)) // should be called with one argument

// // function square(number) {
// //   return number * number
// // }

// // console.log(square(10))

// // const sumAllNums = (...args) => {
// //   // console.log(arguments), arguments object not found in arrow function
// //   // instead we use an a parameter followed by spread operator
// //   console.log(args)
// //  }

// //  sumAllNums(1, 2, 3, 4))
// //  // [1, 2, 3, 4]

// //Expression Function
// //Expression functions are anonymous functions.
// //After we create a function without a name and we assign it to a variable.
// //To return a value from the function we should call the variable. Look at the example below.

// // Function expression
// // const square = function (n) {
// //   return n * n;
// // };

// // console.log(square(2)); // -> 4

// // function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
// //   let space = ' ';
// //   let fullName = firstName + space + lastName;
// //   return fullName;
// // }

// // console.log(generateFullName());
// // console.log(generateFullName('David', 'Smith'));

// // function calculateAge(birthYear, currentYear = 2019) {
// //   let age = currentYear - birthYear;
// //   return age;
// // }

// // console.log('Age: ', calculateAge(1819));

// // const callback = (n) => {
// //   return n * 2
// // }
// // ​// function take other function as a callback
// // function cube(callback, n) {
// //   return callback(n) * n
// // }
// // ​
// // console.log(cube(callback, 3))

// // const evens = [0, 2, 4, 6, 8, 10];
// // const evenNumbers = [...evens];
// // const odds = [1, 3, 5, 7, 9];
// // const oddNumbers = [...odds];

// // const wholeNumbers = [...evens, ...odds];

// // console.log(evenNumbers);
// // console.log(oddNumbers);
// // console.log(wholeNumbers);

// // We can copy an object using a spread operator

// // const user = {
// //   name: 'Asabeneh',
// //   title: 'Programmer',
// //   country: 'Finland',
// //   city: 'Helsinki',
// // }

// // const copiedUser = { ...user }
// // console.log(copiedUser)

// // Modifying or changing the object while copying

// // const user = {
// //   name: 'Asabeneh',
// //   title: 'Programmer',
// //   country: 'Finland',
// //   city: 'Helsinki',
// // }

// // const copiedUser = { ...user, title: 'instructor' }
// // console.log(copiedUser)

// //Spread operator with arrow function
// //Whenever we like to write an arrow function which takes
// //unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter,
// // the argument passed when we invoke a function will change to an array.

// // const sumAllNums = (...args) => {
// //   console.log(args);
// // };

// // sumAllNums(1, 2, 3, 4, 5);

// // 11. Functional Programming
// // In this article, I will try to help you to have a very good understanding of the most common feature of JavaScript, functional programming.

// // Functional programming allows you to write shorter code, clean code, and also to solve complicated problems which might be difficult to solve in a traditional way.

// // In this article we will cover all JS functional programming methods:

// // forEach
// // map
// // filter
// // reduce
// // find
// // findIndex
// // some
// // every

// // const countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];
// // countries.forEach((country, i) => console.log(i, country.toUpperCase()));

// // const getUserInfo = (firstName, lastName, country, title, skills) => {
// //   return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
// //     ' '
// //   )} `;
// // };
// // // When we call this function we need parameters
// // const skills = ['HTML', 'CSS', 'JS', 'React'];
// // console.log(
// //   getUserInfo('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills)
// // );

// // const getUserInfo = (firstName, lastName, country) => {
// //   return `${firstName} ${lastName}. Lives in ${country}.`;
// // };

// // // calling a functons

// // console.log(getUserInfo('Asabeneh', 'Yeteyeh', 'Finland'));

// // function mostrarNumero() {
// //   let numero;
// //   let numero2;
// //   let numero3;
// //   let suma;

// //   numero = prompt('Ingrese un número');
// //   numero2 = prompt('Ingrese otro número');
// //   numero3 = prompt('Ingrese OTRO número');
// //   suma = parseInt(numero) + parseInt(numero2) + parseInt(numero3);

// //   alert(suma);
// // }

// // mostrarNumero();

// //

// //SINCE TODAY PRACTICE WITH QAZI JS

// //Loopear un array de frutas

// // let fruits = ['apples', 'oranges', 'kiwis', 'melons', 'pears'];
// // let i;

// // for (i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// //Pasar el array a string
// // console.log(fruits.toString()); //Devuelve "apples, oranges, kiwis, melons, pears"

// //Pasar el array a un array separado por guiones
// // console.log(fruits.join('-')); //Devielve "apples-oranges-kiwis-melons-pears"

// //Adjuntar otro array al array
// // let vegetables = ['tomato', 'lettuce', 'carrots'];
// // let allGroceries = fruits.concat(vegetables);
// // console.log(allGroceries); //Devuelve ["aples", "oranges", "kiwis", "melons", "pears", "tomato", "lettuce", "carrots"]

// //Reverse
// // console.log(allGroceries.reverse());

// //Ordenar alfabéticamente
// // console.log(allGroceries.sort());

// //Ordenar unos números (Funciona diferente que con letras)
// // let someNumbers = [2, 43, 66, 129, 23, 13, 98, 29, 58, 111];

// // console.log(
// //   someNumbers.sort(function (a, b) {
// //     return a - b;
// //   })
// // ); //Funciona de manera ascendente

// // console.log(
// //   someNumbers.sort(function (a, b) {
// //     return b - a;
// //   })
// // ); //Funciona de manera descendente

// //Creo un nuevo array y lo lleno con números

// // let newArray = new Array();
// // for (let num = 1; num <= 10; num++) {
// //   newArray.push(num);
// // }
// // console.log(newArray); //Me devuelve los números del 1 al 10 en un aerray

// //Hacer una función que sume dos números (hecha con es6)

// // const addNumbers = (num1, num2) => {
// //   return num1 + num2;
// // };
// // console.log(addNumbers(100, 200));

// //Hacer una funcion que convierta de minutos a segundos

// const convertMinutesToSeconts = (minutes) => {
//   return minutes * 60;
// };

// console.log(convertMinutesToSeconts(2));

// //Hacer una funcion que convierta tu edad en segundos

// const convertAgeToSeconds = (age) => {
//   return age * 12 * 30 * 24 * 60 * 60;
// };

// console.log(convertAgeToSeconds(37));

// //Hacer un algoritmo que siempre me retorne el primer elemento de un array

// const getFirstItem = (item) => {
//   return item[0];
// };

// console.log(getFirstItem(['mork', 'mark', 'merk']));

// //Hacer un algoritmo que diga si la pelicula es buena o mala

// const badOrGoodMovie = (movie_rating) => {
//   if (movie_rating >= 7) return 'Good Movie!';

//   return 'Bad Movie';
// };

// console.log(badOrGoodMovie(9));

// //Checkear si un string es vacío

// const stringIsEmpty = (string) => {
//   if (string === '') return 'It is definetly empty';

//   return 'It is filled with stuff';
// };

// console.log(stringIsEmpty('Holaaaaaaaa'));

// //Checkear el min y el max en un array de numeros

// // let arrayDeNumeros = [2, 4, 5, 9, 11, 3, 23];

// // const findMin = (numbers) => {
// //   let minimum = numbers[0];

// //   for (i = 0; i < numbers.length; i++) {
// //     if (numbers[i] < minimum) {
// //       minimum = numbers[i];
// //     }
// //   }

// //   return minimum;
// // };

// // console.log(findMin(arrayDeNumeros));

// // const findMax = (numbers) => {
// //   let maximum = numbers[0];

// //   for (i = 0; i < numbers.length; i++) {
// //     if (numbers[i] > maximum) {
// //       maximum = numbers[i];
// //     }
// //   }
// //   return maximum;
// // };

// // console.log(findMax(arrayDeNumeros));

// // //Ordenar las películas de la mejor a la peor

// // let arrayMovies = [2, 4, 9, 8, 7];

// // const sortBestRatingsFirst = (numbers) => {
// //   for (let j = 0; j < numbers.length - 1; j++) {
// //     let max_num = numbers[j];
// //     let max_location = j;

// //     //Find max
// //     for (let i = j; i < numbers.length; i++) {
// //       if (numbers[i] > max_num) {
// //         max_num = numbers[i];
// //         max_location = i;
// //       }
// //     }
// //     //Swap first and last
// //     numbers[max_location] = numbers[j];
// //     numbers[j] = max_num;
// //   }

// //   return numbers;
// // };

// // console.log(sortBestRatingsFirst(arrayMovies));

// //Hacer lo mismo pero con una función helper

// // let arrayOfNumbers = [2, 5, 1, 8, 9];

// // const findMaxHelper = (numbers, start) => {
// //   let maximum = numbers[start];
// //   let max_location = start;

// //   for (let i = start; i < numbers.length; i++) {
// //     if (numbers[i] > maximum) {
// //       maximum = numbers[i];
// //       max_location = i;
// //     }
// //   }
// //   return { max_number: maximum, max_index: max_location };
// // };

// // const sortBestWithHelper = (numbers) => {
// //   for (let j = 0; j < numbers.length - 1; j++) {
// //     //find maxHelper
// //     max = findMaxHelper(numbers, j);
// //     max_num = max['max_number'];
// //     max_location = max['max_index'];

// //     //swap first and last number
// //     numbers[max_location] = numbers[j];
// //     numbers[j] = max_num;
// //   }

// //   return numbers;
// // };

// // console.log(sortBestWithHelper(arrayOfNumbers));

// // //REDUCE FUNCTIONS TO GET VALUES

// // const combatStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.powerstats.combat);
// //       })
// //       .reduce((a, b) => a + b) / team.length
// //   : '';

// // const durabilityStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.powerstats.durability);
// //       })
// //       .reduce((a, b) => a + b) / team.length
// //   : '';

// // const intelligenceStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.powerstats.intelligence);
// //       })
// //       .reduce((a, b) => a + b) / team.length
// //   : '';

// // const powerStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.powerstats.power);
// //       })
// //       .reduce((a, b) => a + b) / team.length
// //   : '';

// // const speedStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.powerstats.speed);
// //       })
// //       .reduce((a, b) => a + b) / team.length
// //   : '';

// // const strengthStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.powerstats.strength);
// //       })
// //       .reduce((a, b) => a + b) / team.length
// //   : '';

// // const heightStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.appearance.height[1]) / team.length;
// //       })
// //       .reduce((a, b) => a + b)
// //   : '';

// // const weightStats =
// // team.length > 0
// //   ? team
// //       .map((hero) => {
// //         return parseInt(hero.appearance.weight[1]) / team.length;
// //       })
// //       .reduce((a, b) => a + b)
// //   : '';

//CLOSURES EJEMPLOS: FUNCION DENTRO DE UNA FUNCION
// function doSomething() {
//   var name = 'Jorge Dev';
//   function showSomething() {
//     alert(name);
//   }
//   showSomething();
// }
// doSomething();

// function suma(a) {
//   return function calcula(b) {
//     return a + b;
//   };
// }
// console.log(suma(10)(5));

// function getCounter() {
//   var counter = 0;
//   return function () {
//     return counter++;
//   };
// }

// console.log(getCounter.prototype);

//PROTOTYPES

//Instancio el objeto home que se convierte en un constructor

// function Home(name, address) {
//   this.name = name;
//   this.address = address;
// }

// const myHome = new Home('Buenos Aires', 'Florencio Varela 2510');
// const myOtherHome = new Home('Madrid', 'Barajas 2754');

// console.log(myHome);
// console.log(myOtherHome);
// console.log(Home.prototype);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const juan = new Person('Juan Ortiz', 34);
// console.log(juan);

//KATA: EJERCICIO 540617388 => 046887531  Ordenar los números primero ascendente
// y luego de manera descendiente

//Primero convertimos el numero a string, luego con el split lo convertimos en array, luego lo mapeamos y lo volvemos a convertir en un int y me queda un array

// const orderedNumbers = (number) => {
//   const numbersArray = number
//     .toString()
//     .split('')
//     .map((num) => parseInt(num));

//   const evens = numbersArray.filter((num) => num % 2 === 0).sort(); //PARES
//   const odds = numbersArray
//     .filter((num) => num % 2 !== 0)
//     .sort()
//     .reverse(); //IMPARES
//   const orderedNumbers = evens.concat(odds).join('');

//   console.log(orderedNumbers);

//   return numbersArray;
// };

//con [5,4,0,6,1,7,3,8,8]

// const result = orderedNumbers(540617388);

//DADO UN ARRAY USE DESTRUCTURING PARA OBTENER EL PRIMERO Y SEGUNDO Y GUARDAR
//LOS OTROS RESTANTES EN OTRO ARRAY

// const players = ['Murray', 'Nadal', 'Alejandro', 'Djokovic', 'Soras', 'Rumi'];

// const [primero, segundo, ...rest] = players;

// console.log(primero, segundo);
// console.log(rest);

//-----------------------------------------------------------------

//FIZZBUZZ: Escriba un programa que use console.log para imprimir todos los
//números del 1 al 100 con dos excepciones. Para los números divisibles por
//3, imprima Fizz, para los divisibles por 5 Buzz

// for (let i = 1; i <= 100; i++) {
//   let result = '';

//   if (i % 3 === 0) {
//     result += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     result += 'Buzz';
//   }

//   console.log(result || i);
// }

//Dado un string, cree una función reverse que invierta el orden de los caracteres

// let myText = 'hello world';
// let textReverse = '';

// for (letter of myText) {
//   textReverse = letter + textReverse;
// }

// console.log(textReverse);

// OTRO EJERCICIO

//Dado un string, cree una función que invierta el orden de sus caracteres.
//Debe de utilizar una desestructuración en el proceso.

// let myText = 'hello world';
// let textReverse = '';
// myText = [myText]; //Devuelve [myText]
// let myTextArrayChar = [...myText]; //Devuelve ["h", "e", "l", "l", "o", "", "w", "o", "r", "l", "d"]
// myTextArrayChar.reverse().join(); //Devuelve el mismo array pero al reves

// function reverseDes(myText) {
//   return [...myText].reverse().join('');
// }

// console.log(reverseDes('hello people'));
//-----------------
//Dado un string invierta el orden de sus caracteres recursivamente

// function reverse(text) {
//   if (text === '') {
//     return '';
//   }
//   let subtext = text.substring(1);
//   return reverse(subtext) + text.charAt(0);
// }

// console.log(reverse('hola mundo'));

//-----------------
//Dado un string, invierta el orden de sus caracteres sin utilizar un nuevo string
//Realice las modificaciones en el propio string
// ESTO NO SE PUEDE HACER PORQUE LOS STRINGS SON INMUTABLES EN JS

//-------------

//Construya una función isPalindrome, la cual dado un string nos indique si
//es un palindrome o no
// let myText = 'Yo dono rosas oro no doy';

// function clearText(text) {
//   return text.split(' ').join('');
// }

// let myClearText = clearText(myText.toLowerCase()); //Para que no detecte la may Yo

// function isPalindrome(text) {
//   let myClearText = clearText(text); //"yodonorosasoronodoy"
//   return myClearText === reverse(myClearText);
// }

// console.log(isPalindrome('121')); //DEVUELVE TRUE
// console.log(isPalindrome('122')); //DEVUELVE FALSE

//--------
//Intente invertir las palabras de una frase, pero cada palabra debe mantenerse
//en el mismo lugar EJEMPLO: Hello World === olleH dlroW

//FUNCION REVERSE CON RECURSION

// function reverse(text) {
//   if (text === '') {
//     return '';
//   }
//   let subtext = text.substring(1);
//   return reverse(subtext) + text.charAt(0);
// }

// let myText = 'Yo dono rosas oro no doy';
// let textToArray = myText.split(' '); //["Yo", "dono", "rosas", "oro", "no", "doy"]
// let arrayInverted = textToArray.map((word) => reverse(word));
// let invertedText = arrayInverted.join(' ');
// console.log(invertedText); //oyY onoD sasoR oro on yod

//

//---------
//Implemente un algoritmo capaz de combinar dos arrays ordenados, obteniendo
//un array ordenado.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// function mergeArrays(arr1, arr2) {
//   let combinedArray = [];
//   //Comparo los primeros elementos que son los mínimos
//   while (arr1.length && arr2.length) {
//     let firstElement;

//     //saco el primer elemento y lo pongo en combinedArray
//     if (arr1[0] < arr2[0]) {
//       firstElement = arr1.shift();
//     } else {
//       firstElement = arr2.shift();
//     }
//     combinedArray.push(firstElement);
//   }
//   //Si queda vacío uno de los arrays concatename los elementos restantes al final
//   combinedArray = combinedArray.concat(arr1).concat(arr2);
//   return combinedArray;
// }

// console.log(mergeArrays(arr1, arr2));

//------------
// console.log(nombre);

// var nombre = 'Jorge';

// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// saludar();

//----------
//OTRO EJERCICIO DE PALINDROMO

// function isPalindrome(text) {
//   let inverted = text.split('').reverse().join('');
//   return inverted === text; //devuelve true o false
// }

// console.log('¿Es un palíndromo?' + ' ' + isPalindrome('menem'));

//-------
//EJERCICIO: Dada una palabra buscarla en una frase y devolver cuantas
//veces aparece en ella. La frase y la palabra deben ser parámetros de
//una función

// function coincidencias(frase, busqueda) {
//   let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, ''); //LIMPIO FRASE
//   let resultado = 0;
//   if (texto_limpio.includes(busqueda)) {
//     let palabras = texto_limpio.split(' ');
//     let mapa = [];
//     for (let palabra of palabras) {
//       if (mapa[palabra]) {
//         mapa[palabra]++;
//       } else {
//         mapa[palabra] = 1;
//       }
//     }
//     resultado = mapa[busqueda];
//   } else {
//     resultado = 0;
//   }
//   return resultado;
// }

// console.log(
//   'Número de coincidencias en la búsqueda :',
//   coincidencias('Esto es una frase que, no repite una, palabra', 'una')
// );

// //OTRA VERSIOn
// const buscarPalabra = (frase, palabra) => {
//   let aux = frase
//     .toLowerCase()
//     .replace(/[!¡.,-¿?]/gi, '')
//     .split(' ');
//   let cont = 0;

//   for (let i = 0; i < aux.length; i++) {
//     if (aux[i].includes(palabra)) {
//       cont++;
//     }
//   }
//   return cont;
// };
// //-----
// //Dada una cadena de texto, darle la vuelta e invertir el orden de sus
// //caracteres, sin usar métodos propios del lenguaje, solo estructuras de control

// function invertirTexto(texto) {
//   let invertido = '';
//   for (let letra of texto) {
//     invertido = letra + invertido;
//   }
//   return invertido;
// }

// function invertirTextoOtraOpcion(texto) {
//   return texto.split('').reverse().join('');
// }

// console.log('Texto Invertido: ' + invertirTexto('Madmoiselle'));
// console.log('Texto Invertido: ' + invertirTextoOtraOpcion('Madmoiselle'));

// //---
// //Dibujar un cuadrado hueco con asteriscos

// function lado(numero) {
//   let lado = '';
//   for (let i = 0; i < numero; i++) {
//     lado += '*';
//   }
//   return lado;
// }

// function cuadrado(numero) {
//   let dibujo = lado(numero) + '\n';
//   let contenido = '';
//   for (let i = 0; i < numero - 2; i++) {
//     contenido = '*';
//     for (let x = 0; x < numero - 2; x++) {
//       contenido += ' ';
//     }
//     contenido += '*';
//     dibujo += contenido + '\n';
//   }
//   dibujo += lado(numero);

//   return dibujo;
// }

// console.log(cuadrado(4));

// //EJEMPLO DE CLOSURE
// function crearContador() {
//   let contador = 0;
//   return function incrementar() {
//     contador = contador + 1;
//     return contador;
//   };
// }

// const contador1 = crearContador();
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());

// let miCalculo = 8 / 2;
// console.log(miCalculo);

// let miEjemplo = 'Fullstack';
// console.log(miEjemplo);

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let a = 20;
// let b = 10;

// if (a + b > 30) {
//   console.log('Entré acá');
// }

// var numero = 36;
// var divisor = 3;

// if (numero / divisor > 12) {
//   console.log('Puedo dividrlo');
// } else {
//   console.log('no puedo ');
// }

// function crearContador() {
//   let contador = 0;
//   return function incrementar() {
//     contador = contador + 1;
//     return contador;
//   };
// }
// const contador1 = crearContador();

// console.log(contador1);

//PURE FUNCTION
// function addData(firstInput, secondInput) {
//   return firstInput + secondInput;
// }
// var getData = addData(1, 2);
// console.log(getData);
// ---------------------
//FIZZBUZZ
// function fizzbuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz();

//CHALLENGE: Que imprime el console.log(i) ?

// function variables() {
//   var i = 'contratado';
//   for (var i = 0; i < 2; i++) {
//     //var aca ya es 2
//   }
//   console.log(i);
// }

// variables();

//ANSWER: 2. Porque var se redeclara. Si uso let en ambos lugares, da contratado,
//porque el segundo let se usa solo dentro del escope del for, el otro sigue siendo igual

// -----------------------------------------------------------------------------

//OUTPUT QUESTIONS

// Question 1: (Strings, Numbers, Boolean)

// var num = 8;
// var num = 10;
// console.log(num);

// Answer — 10
// Explanation — With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value. You cannot do this with let or const since they're block-scoped.

//QUESTION 2

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Ayush';
//   let age = 21;
// }

// sayHi();

// Answer — undefined and ReferenceError
// Explanation — Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.

//QUESTION 3

// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

// Answer — ReferenceError
// Explanation —With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.

//QUESTION 4

// function sum(a, b) {
//   return a + b;
// }

// sum(1, '2');

// Answer — "12"
// Explanation —JavaScript is a dynamically typed language: we don’t specify what types of certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

// In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".

// QUESTION 5

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// Answer — 1 2 4
// Explanation —The continue statement skips an iteration if a certain condition returns true.

//QUESTION 6

// Answer — "number"
// Explanation —The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".

// FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. "function" is not a type, since functions are objects, it's of type "object".

//QUESTION 7
// console.log(typeof typeof 1);

// Answer —"string"
// Explanation —typeof 1 returns "number". And typeof "number" returns "string".

//QUESTION 8

// const ayushString = 'Ayush';
// const ayush = [...ayushString];
// console.log(ayush);

// Answer — ["A", "y", "u", "s", "h"]
// Explanation —A string is an iterable. The spread operator maps every character of an iterable to one element.

//QUESTION 9
// var a = 10;
// var b = a;
// b = 20;
// console.log(a);
// console.log(b);
// var a = 'Ayush';
// var b = a;
// b = 'Verma';
// console.log(a);
// console.log(b);

// Answer —
// 1. 10 and 20
// 2. "Ayush" and "Verma"
// Explanation —The value assigned to the variable of primitive data type is tightly coupled. That means, whenever you create a copy of a variable of primitive data type, the value is copied to a new memory location to which the new variable is pointing to. When you make a copy, it will be a real copy.

//QUESTION 10
// function sum() {
//   return arguments.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3));
// function sum(...arguments) {
//   return arguments.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3));

// Answer —
// 1. Error will be thrown.
// 2. 6
// Explanation —
// 1. Arguments are not fully functional array, they have only one method length. Other methods cannot be used on them.
// 2. ... rest operator creates an array of all functions parameters. We then use this to return the sum of them.

//QUESTION 11

// let lang = 'javascript';
// (function () {
//   let lang = 'java';
// })();

// console.log(lang);
// (function () {
//   var lang2 = 'java';
// })();

// console.log(lang2);

// Answer —
// 1. “javascript”
// 2. Error will be thrown.
// Explanation —
// 1. Variables defined with let are blocked scope and are not added to the global object.
// 2. Variables declared with var keyword are function scoped, so wrapping the function inside a closure will restrict it from being accessed outside that is why it throws error

//QUESTION 12

// (function () {
//   console.log(typeof this);
// }.call(10));

// Answer — object
// Explanation — call invokes the function with new this which in this case is 10 which is basically a constructor of Number and Number is object in javascript.

//QUESTION 13
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// Answer — { a: "three", b: "two"}"
// Explanation —If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

//QUESTION 14
// let c = { greeting: 'Hey!' };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// Answer — Hello
// Explanation — In JavaScript, all objects interact by reference when setting them equal to each other.

// First, a variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them.

//QUESTION 15
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

// Answer — "object"
// Explanation —The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object".

//QUESTION 16

// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');
// bar();
// foo();
// baz();

// Answer — First Third Second
// Explanation —We have a setTimeout function and invoked it first. Yet, it was logged last.

//QUESTION 17
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// Answer — 3 3 3 and 0 1 2
// Explanation — Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.

//QUESTION 18
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const sayush = new Person('Ayush', 'Verma');
// const sarah = Person('Sarah', 'Smith');

// console.log(sayush);
// console.log(sarah);

// Answer — Person {firstName: "Ayush", lastName: "Verma"} and undefined
// Explanation —For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!

//QUESTION 19
// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// Answer — 456
// Explanation — no se

//QUESTION 20
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());
// Answer — 20 and NaN
// Explanation — The first one refers to the object and the perimeter the this makes reference to the window object

//FUNCION PARA CREAR NUMEROS ALEATORIOS
// function generarAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(generarAleatorio(1, 6));
// }

//OBTENER NUM MIN Y MAX DE UN ARRAY
// let numeros = [7, 11, 2, 13, 25, 82, 11];

// console.log(`El valor minimo es ${Math.min(...numeros)}`);
// console.log(`El valor maximo es ${Math.max(...numeros)}`);

//MATH FLOOR Y MATH CEIL DIFERENCIAS
//El Math.floor(): redondea al entero menor más cercano
//El Math.ceil(): redondea al entero mayor más cercano

//INVERTIR NUMERO
// function invertirNumero(numero) {
//   return Number(numero.toString().split('').reverse().join(''));
// }

// console.log(invertirNumero(12345)); //OUTPUT 54321

//CALCULAR LONGITUD DE NUMERO

// function calcularLongitudNumero(numero) {
//   return numero.toString().split('').length;
// }

// let valor = 123456789;

// console.log(calcularLongitudNumero(valor)); //OUTPUT 9

//INTERCAMBIAR EL CONTENIDO DE DOS VARIABLES SIN USAR UNA AUXILIAR
let a = 100;
let b = 50;

function intercambiarNumeros(num1, num2) {
  num2 = num2 - num1; // en este momento b es -50
  num1 = num1 + num2; //en este momento a es 50
  num2 = num1 - num2; //en este momento b es 100
  return [num1, num2];
}

console.log(intercambiarNumeros(a, b));

//CREAR UN METODO PARA ELIMINAR UN ELEMENTO DE UN ARREGLO
function eliminarElemento(array, value) {
  return array.filter((element) => {
    return element != value;
  });
}

console.log(eliminarElemento([1, 2, 3, 4, 5], 4));

//AGREGAR UN ARREGLO AL FINAL DE OTRO
let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];

let resultado = numeros1.concat(numeros2);
console.log(resultado); //output [1,2,3,4,5,6,7,8,9,10]

//INVERTIR EL ORDEN DE LOS ELEMENTOS DE UN ARRAY

let numerosOrdenadosAlDerecho = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosOrdenadosAlReves = numerosOrdenadosAlDerecho.reverse();
console.log(numerosOrdenadosAlReves); //output [9,8,7,6,5,4,3,2,1]

//USO BASICO DEL OPERADOR SPREAD

function sumar(a, b, c) {
  return a + b + c;
}

let numerosSpread = [1, 2, 3];
let sumaSpread = sumar(...numerosSpread);

console.log(sumaSpread);

//ORDENAR UN ARRAY CON LA FUNCION SORT

let numerosSort = [12, 82, 32, 16, 8, 99, 35, 1];
let numerosSorteados = numerosSort.sort();
console.log(numerosSorteados); //SIRVE PARA ORDENAR ALFABETICAMENTE

//COMPROBAR QUE TODOS LOS ELEMENTOS DE UN ARRAY CUMPLAN UNA CONDICION

let arrayEveryNumbers = [3, 7, 2, 1, 9, 11, 13];
let resultadoDeArrayEveryNumbers = arrayEveryNumbers.every((value) => {
  return value > 2;
});
console.log(resultadoDeArrayEveryNumbers); //output false porque hay un 1

//COMPROBAR QUE ALGUNOS DE LOS ELEMENTOS DE UN ARRAY CUMPLAN UNA CONDICION

let resultadoDeArraySomeNumbers = arrayEveryNumbers.some((value) => {
  return value > 2;
});
console.log(resultadoDeArraySomeNumbers); //output true porque algunos son mayores a 2

//USAR REDUCE PARA SUMAR LOS NUMEROS DE UN ARRAY

let numerosSinReduce = [1, 5, 8, 4, 13];
let numerosConReduce = numerosSinReduce.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(numerosConReduce); //output 31

//ENCONTRAR LOS ELEMENTOS UNICOS DE UN ARRAY CON LA FUNCION FILTER

let numerosNoUnicos = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7, 8];

let numerosUnicos = numerosNoUnicos.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(numerosUnicos); //Output: 1,2,3,4,5,6,7,8

//CREAR UNA CLASE PERSONALIZADA

class Persona {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }

  mostrarDatos() {
    console.log('Nombre', this.nombre);
    console.log('Apellido', this.apellido);
    console.log('Edad', this.edad);
    console.log('Email', this.email);
  }
}

let persona = new Persona('Juan', 'Ortiz', 38, 'juan@mail.com');
console.log(persona);
persona.mostrarDatos();

//CREAR UNA FUNCION CONSTRUCTORA Y DEFINIR UN METODO DE INSTANCIA

function PersonaTwo(nombre, apellido, edad, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.email = email;

  this.mostradDatos = function () {
    console.log('Nombre: ', this.nombre);
    console.log('Apellido: ', this.apellido);
    console.log('Edad: ', this.edad);
    console.log('Email: ', this.email);
  };
}

let edward = new PersonaTwo('Edward', 'Ortiz', 39, 'edward@gmail.com');
let daniela = new PersonaTwo('Daniela', 'Maya', 49, 'daniela@mail.com');

console.log(edward);
edward.mostradDatos();
daniela.mostradDatos();

//IMPLEMENTAR UNA JERARQUIA DE HERENCIA CON EXTENDS

class PersonaThree {
  constructor(nombre, apellido, identificacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.identificacion = identificacion;
  }
}
//ahora extiendo esta clase y agrego otras propiedades

class Estudiante extends PersonaThree {
  constructor(nombre, apellido, identificacion, carnet, carrera, semestre) {
    super(nombre, apellido, identificacion); //extiende las propiedades del constructor

    this.carnet = carnet;
    this.carrera = carrera;
    this.semestre = semestre;
  }
}

//ahora extiendo a otra
class Profesor extends PersonaThree {
  constructor(nombre, apellido, identificacion, profesion, sueldo) {
    super(nombre, apellido, identificacion);
    this.profesion = profesion;
    this.sueldo = sueldo;
  }
}

//CREAR Y EJECUTAR UNA FUNCION ANONIMA

let sumarDeNuevo = function (a, b) {
  let suma = a + b;
  return suma;
};

console.log(sumarDeNuevo(2, 3));
