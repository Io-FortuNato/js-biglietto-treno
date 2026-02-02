let priceKm = 21; // centesimi
let percentualeMinori = 20;
let percentualeAnziani = 40;

let primoSconto = Math.round(priceKm * (1 - percentualeMinori / 100));
console.log (primoSconto);

let secondoSconto = Math.round(priceKm * (1 - percentualeAnziani / 100));
console.log (secondoSconto)

let età = 66;

if (età < 18) {
   console.log ("hai dirtto al primoSconto");
} else if (età > 65) {
   console.log ("hai diritto al secondoSconto");
} else {
    console.log ("non hai diritto allo sconto")
}