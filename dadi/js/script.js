var dadoUtente = Math.floor(Math.random() *6) *1;
alert("il tuo numero è " + dadoUtente);

var dadoPc = Math.floor(Math.random() *6) *1;
alert("il numero del Pc è " + dadoPc)

if (dadoUtente > dadoPc){
    alert("Hai vinto!")
} else if (dadoPc > dadoUtente) {
    alert("Hai perso ritenta.")
} else {
    alert("Pareggio! vince il banco :P")
}