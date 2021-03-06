/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1. Definisco le variabili globali, in questo caso elementNumber (100 da traccia), elementText (il testo da stampare) e il main (dove stampare il testo)
2. Creo un ciclo (100 giri) che stampi in console elementText
3. Aggiungo all'interno del ciclo le condizioni di elementText se un numero è perfettamente divisibile per 3, 5 e 15

*/

// 1. Definisco le variabili globali, in questo caso elementNumber (100 da traccia), elementText (il testo da stampare) e il main (dove stampare il testo)

// Variabili costanti
const elementNumber = 100;
const main = document.getElementById('main');

// Variabile da aggregare nei cicli
let elementText = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3 mx-auto">';

// 2. Creo un ciclo (100 giri) che stampi in console elementText
for (let i = 1; i <= elementNumber; i++){
    
    // 3. Aggiungo all'interno del ciclo le condizioni di elementText se i perfettamente divisibile per 3, 5 e 15
    if (i % 15 === 0) {
        elementText += '<div class="col"><div class="my-card fizzbuzz">FizzBuzz</div></div>';
    } else if (i % 3 === 0) {
        elementText += '<div class="col"><div class="my-card fizz">Fizz</div></div>';
    } else if (i % 5 === 0) {
        elementText += '<div class="col"><div class="my-card buzz">Buzz</div></div>';
    } else {
        elementText += `<div class="col"><div class="my-card">${i}</div></div>`;
    }
}

elementText += '</div>';
main.innerHTML = elementText;