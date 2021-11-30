// Descrizione:
// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo l'arrey dove conterrò i numeri generati automaticamente
const numberArray = [];

// creo un ciclo for che stampa un alert finche l'arrey creato contiene 5 numeri
for(let i = 0; i < 5; i++){

    let randomNumber = getRndInteger(10, 1000)

    let alertNumber = alert(randomNumber);

    numberArray.push(randomNumber);

}
console.log(numberArray);

// quando stampo l'ultimo alert faccio partire la funzione setTimeout che dura 30 secondi

setTimeout(function(){
    // all'interno di questa funzione 

        // tramite dei prompt chiedo all'utente di inserire i numeri che erano presenti negli alert

        // confronto i numeri che ha inserito con i numeri presenti nell'array

            // se i numeri che ha inserito sono uguali a quelli dell'array allora ha vinto e scrivo che ha indovinato 5 numeri

            // altrimenti ha perso e scrivo i numeri che ha individuato e i numeri che ha sbagliato
    
    
}, 1000);





// FUNZIONE RANDOM NUMBER

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }