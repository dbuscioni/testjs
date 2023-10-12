//##### CONVERSIONE KM MIGLIA

let miglia = prompt("Indica le miglia da convertire: ")

const proporzione = 1.609

let chilometri = miglia * proporzione

// usando i backtick (win+r -> charmap )
//console.log(`${chilometri} chilometri sono uguali a ${miglia} miglia.`);
alert(miglia + " miglia sono uguali a " + chilometri + " chilometri.")

//##### CALCOLATRICE BASICA

let num1 = prompt("Numero 1: ")
let num2 = prompt("Numero 2: ")

let risultato = num1 * num2

// usando i backtick (win+r -> charmap )
//console.log(`${chilometri} chilometri sono uguali a ${miglia} miglia.`);
alert("Moltiplicando " + num1 + " e " + num2 + " il risultato è " + risultato)

//##### CONVERSIONE CELSIUS FAHRENHEIT
let fahrenheit = prompt("Indica i gradi da convertire: ")
const rapporto = 0.555
const differenza = 32
const celsius = (fahrenheit - differenza) * rapporto;
alert(fahrenheit + " Gradi Fahrehneit corrispondono a " + celsius + " Gradi Celsius");