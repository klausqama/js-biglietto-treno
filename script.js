//Controllo del corretto funzionamento prima dell'esercizio//
const name= 'klaus'
console.log(name)

// Inizio ex//
// Creare un Prompt per chiedere il numero di chilometri da percorrere al passeggero
let km = prompt("Quanti chilometri deve percorrere?")
console.log(km) // 10
//chiedere l'età del passeggero per eventuale sconto
let age = prompt("inserisca la sua età")
console.log(age)
//Prezzo del biglietto al km
const kmPrice = 0.21
let totalPrice = km * kmPrice 
// sconto del prezzo per età del 20% 
if(age < 18){
    totalPrice = totalPrice * 20 / 100
}
// sconto del prezzo per età del 40%
else if (age >= 65){
    totalPrice = totalPrice * 40/100
}
console.log(totalPrice)
