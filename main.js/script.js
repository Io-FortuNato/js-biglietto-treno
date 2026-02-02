let priceKm = 21;
let percentualeMinori = 20;
let percentualeAnziani = 40;

let primoSconto = Math.round(priceKm * (1 - percentualeMinori / 100));
console.log (primoSconto);

let secondoSconto = Math.round(priceKm * (1 - percentualeAnziani / 100));
console.log (secondoSconto)