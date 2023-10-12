//### PARI O DISPARI
const numero = prompt("Inserisci un numero: ");

//check if the number is even
if(numero % 2 === 0) {
    alert("Il numero è pari");
}
else {
    alert("Il numero è dispari");
}

const num1 = prompt("Inserisci il primo numero: ")
const num2 = prompt("Inserisci il secondo numero: ")
const num3 = prompt("Inserisci il terzo numero: ")

let vincitore

if(num1 >= num2 && num1 >= num3) {
    vincitore = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    vincitore = num2;
}
else {
    vincitore = num3}

alert("Il numero più grande è " + vincitore)
// ALTERNATIVA FUTURA PIU' EFFICACE
//let vincitore = Math.max(num1, num2, num3)
//alert("Il numero più grande è " + vincitore)

//#### MINI CALCOLATRICE BASIC (non testato)
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
