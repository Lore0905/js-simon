// Descrizione:
// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo l'arrey dove conterrò i numeri generati automaticamente
const numberArrayRandom = [];

// creo un ciclo for che stampa un alert finche l'arrey creato contiene 5 numeri
for(let i = 0; i < 5; i++){

    let randomNumber = getRndInteger(10, 1000)

    let alertNumber = alert(randomNumber);

    numberArrayRandom.push(randomNumber);

}
console.log('numeri random:  ' + numberArrayRandom);

// creo un arrey dove sono presenti i numeri che ha inserito l'utente
const numberArrayUser = [];

// creo l'arrey in cui vengono inseriti SOLO i numeri corretti che ha scritto l'utente
const userCorrectNumber = [];
// creo l'arrey in cui vengono inseriti SOLO i numeri corretti che ha scritto l'utente
const userWrongNumber = [];

// quando stampo l'ultimo alert faccio partire la funzione setTimeout che dura 30 secondi

setTimeout(function(){
    // all'interno di questa funzione 

    // creo un ciclo for
    for(let i = 0; i < numberArrayRandom.length; i++){

        // creo 5 prompt
        let numberAnswers = parseInt( prompt('dimmi i numeri in ordine') );
        
        // pusho nell'array i valori della variabile numberAnswer
        numberArrayUser.push(numberAnswers);

        // confronto i numeri che ha inserito con i numeri presenti nell'array
        numberArrayRandom.forEach((element) => {

            if( element === numberAnswers ){
                userCorrectNumber.push(numberAnswers);
            }
            else{
                userWrongNumber.push(numberAnswers);
            }
        });
        
    };
    
    console.log("numeri inseriti dall'utente:  " + numberArrayUser);
    console.log("numeri CORRETTI inseriti dall'utente:  " + userCorrectNumber);
    console.log("numeri ERRATI inseriti dall'utente:  " + userWrongNumber);

    let finalmex;

    if ( userCorrectNumber.length === 1){
        finalmex = alert( `hai indovinato un numero, il numero che hai indovinato è: ${userCorrectNumber}` )
    } 
    else {
        finalmex = alert( `hai indovinato ${userCorrectNumber.length} numeri, i numeri che hai indovinato sono: ${userCorrectNumber}` )
    }
    
}, 1000);









// FUNZIONE RANDOM NUMBER

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }