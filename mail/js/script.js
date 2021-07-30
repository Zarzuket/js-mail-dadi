// 1 chiedi all'utente la sua email
// 2 crea una lista di mail
// 3 controlla che la mail dell'utente sia nella lista
// 4 stampa un messaggio se è sulla lista
// 5 stampa un messaggio se non è sulla lista


var  mailUtente = (prompt("inserisci la tua email"));

var listaMail = ["davide.bajo@gmail.com" , "zio.franco@gmail.com" , "pino.lavatrice@gmail.com"]

for ( var i = 0; i<listaMail.length; i++ ){

    if (mailUtente == listaMail[i]) {
        alert("sei dentro fratello")
    } else {
        alert("non sei dentro.")
    }
}