/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1. Definisco le variabili globali, in questo caso elementNumber (100 da traccia) ed elementText (il testo da stampare)
2. Creo un ciclo (100 giri) che stampi in console elementText
3. Aggiungo all'interno del ciclo le condizioni di elementText se un numero è perfettamente divisibile per 3, 5 e 15

*/

// 1. Definisco le variabili globali, in questo caso elementNumber (100 da traccia) ed elementText (il testo da stampare)
const elementNumber = 100;
let elementText = "";

// 2. Creo un ciclo (100 giri) che stampi in console elementText
for (let i = 1; i <= elementNumber; i++){
    elementText = i;

    // 3. Aggiungo all'interno del ciclo le condizioni di elementText se un numero è perfettamente divisibile per 3, 5 e 15
    if (i % 3 === 0) elementText = "Fizz";
    if (i % 5 === 0) elementText = "Buzz";
    if (i % 15 === 0) elementText = "FizzBuzz";
    console.log(elementText);
}
