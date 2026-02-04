let priceKm = 21; // centesimi
let km = Number(prompt("Quanti km vuoi percorrere?:"));
let prezzo = km * priceKm;
let percentualeMinori = 20;
let percentualeAnziani = 40;
let eta = Number(prompt("Inserisci la tua età:"));


if (eta < 18) {
    console.log("hai diritto allo sconto under 18");
    prezzo = Math.round (prezzo * (1 - percentualeMinori / 100));
} else if (eta > 65) {
    console.log("hai diritto allo sconto over 65");
    prezzo = Math.round (prezzo *(1 - percentualeAnziani / 100));
} else {prezzo,console.log("nessuno sconto disponibile");
}

console.log("totale:",(prezzo / 100).toFixed(2) + " £")