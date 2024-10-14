//Controllo del corretto funzionamento prima dell'esercizio//
const name= 'klaus'
console.log(name)

// Inizio ex//
// Creare un Prompt per chiedere il numero di chilometri da percorrere al passeggero
let Km = prompt("Quanti chilometri deve percorrere?")
console.log(Km)
//chiedere l'età del passeggero per eventuale sconto
let userAge = prompt("inserisca la sua età")
console.log(userAge)
// modificare il valore di prompt da stringa a numero
const numberKm = parseInt(Km)
const numberuserAge = parseInt(userAge)
//Prezzo del biglietto al km
const kmPrice = 0.21
let totalPrice = Km * kmPrice 
// sconto del prezzo per età del 20% 
if(userAge < 18){
    totalPrice = totalPrice * 20 / 100
}
// sconto del prezzo per età del 40%
else if (userAge >= 65){
    totalPrice = totalPrice * 40/100
}
// risultato del prezzo finale in numeri decimali max.2
totalPrice = totalPrice.toFixed(2)
// Final Output 
console.log('Il totale del vostro viaggio è:')

