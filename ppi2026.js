/*
    Programação para Internet - 2026
    Professor: Guilherme Leal
*/

// Ativar o formatador Prettier
// ALT + SHIFT + F

// # Aula 06/05 - Introdução a JavaScript

console.log("Bem vindo a PPI!");

// Variáveis
let name = "João";
let age = 17;
let isStudent = true;

const PI = 3.14; // Não pode mudar de valor
console.log(PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // soma
let y = "5" + 5; // concatenação
let z = "Hello" + 5;

console.log(x**2, y, z); // ** potência
console.log(typeof x);

// Operadores relacionais
console.log('5' != 5); // Diferença
console.log('5' == 5); // Compara tipo OU valor
console.log('5' === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // incremento após o retorno do valor
console.log(x);
console.log(++x); // incremento antes do retorno do valor

let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression);

// if...else
// if (condition) {
//     // condition === true
// } else {
//     // condition === false

// }

// Template Strings
let text =
`iohan
laneluszao`;

console.log(text);

for (let index = 0; index < array)