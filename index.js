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
