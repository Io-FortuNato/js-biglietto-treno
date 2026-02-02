let priceKm = 21; // centesimi
let km = Number(prompt("Quanti km vuoi percorrere?:"));
let prezzo = km * priceKm;
let percentualeMinori = 20;
let percentualeAnziani = 40;
let età = Number(prompt("Inserisci la tua età:"));


if (età < 18) {
   console.log ("hai dirtto al primoSconto");
} else if (età > 65) {
   console.log ("hai diritto al secondoSconto");
} else {
    console.log ("non hai diritto allo sconto")
}

if (età < 18) {
 prezzo = Math.round (prezzo * (1 - percentualeMinori / 100));
} else if (età > 65) {
    prezzo = Math.round (prezzo *(1 - percentualeAnziani / 100));
} else {prezzo}

console.log("totale:",(prezzo / 100).toFixed(2) + " £")