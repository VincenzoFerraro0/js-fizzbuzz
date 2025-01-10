/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/ 

/*
    a Creiamo un ciclo da 1 a 100
    b Creaiamo delle condizioni:
        b.1 -Per i multipli sia di 3 e di 5, stampiamo FizzBuzz --> METTO PRIMA I NUMERI CHE SONO DIVISIBILI SIA PER 3 CHE 5 
            b.2 -Per i numeri multipli di 3 stampiamo fizz
                b.3 -Per i numeri multipli di 5 stampiamo buzz
                    b.4 - Altrimenti stampo tutti i numeri che non sono compresi nella condizione 
                
*/

// CREO CICLO 
for (let i = 1; i <= 100; i++){
    console.log(i)
    //CREO CONDIZIONI
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }else if (i % 3 === 0){
        console.log("Fizz")
    }
}
   
