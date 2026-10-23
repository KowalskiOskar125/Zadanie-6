// ZADANIE 1
for (let i = 1; i <= 10; i++) {
    document.write(i + " | ");
}
document.write("<br><br>");

// ZADANIE 2
for (let i = 10; i >= 1; i--) {
    document.write(i + " | ");
}
document.write("<br><br>");

// ZADANIE 3
let suma3 = 0;
for (let i = 1; i <= 10; i++) {
    suma3 += i;
}
document.write(suma3 + "<br><br>");

// ZADANIE 4
for (let i = 2; i <= 20; i += 2) {
    document.write(i + " | ");
}
document.write("<br><br>");

// ZADANIE 5/6
let x = parseInt(prompt("Podaj liczbe miesiecy:"));
let y = parseFloat(prompt("Podaj kwote odkladana co miesiac:"));
let stankonta = 0;
for (let m = 1; m <= x; m++) {
    stankonta += y;
    stankonta *= 1.08;
}
document.write(stankonta.toFixed(2) + "<br><br>");

// ZADANIE 7
let suma7 = 0;
let elementciagu = 5;
for (let i = 1; i <= 100; i++) {
    suma7 += elementciagu;
    elementciagu += 10;
}
document.write(suma7 + "<br><br>");

// ZADANIE 8
let sumacegiel8 = 0;
for (let i = 10; i >= 1; i--) {
    sumacegiel8 += (i * i);
}
document.write(sumacegiel8 + "<br><br>");

// ZADANIE 9
let podstawax = parseInt(prompt("Podaj liczbe cegiel w podstawie:"));
let wysokoscy = parseInt(prompt("Podaj liczbe rzedow:"));
let krotzyoz = parseInt(prompt("O ile cegiel krotszy jest kazdy rzad:"));
let sumacegiel9 = 0;
let aktualnyrzad = podstawax;
for (let i = 1; i <= wysokoscy; i++) {
    if (aktualnyrzad <= 0) break;
    sumacegiel9 += aktualnyrzad;
    aktualnyrzad -= krotzyoz;
}
document.write(sumacegiel9 + "<br><br>");

// ZADANIE 10
let wagak = parseFloat(prompt("Podaj wage jednej cegly w kg:"));
document.write((385 * wagak) + "<br><br>");

// ZADANIE 11
let calca = parseFloat(prompt("Podaj pierwsza liczbe:"));
let calcznak = prompt("Podaj znak dzialania (+, -, *, /):");
let calcb = parseFloat(prompt("Podaj druga liczbe:"));
let wynikcalc;
switch(calcznak) {
    case "+": wynikcalc = calca + calcb; break;
    case "-": wynikcalc = calca - calcb; break;
    case "*": wynikcalc = calca * calcb; break;
    case "/": wynikcalc = calcb !== 0 ? calca / calcb : "Blad"; break;
    default: wynikcalc = "Blad";
}
document.write(wynikcalc + "<br><br>");

// ZADANIE 12
let elemn = parseInt(prompt("Podaj liczbe elementow:"));
let startx = parseFloat(prompt("Podaj wartosc pierwszego elementu:"));
let roznicay = parseFloat(prompt("Podaj roznice ciagu:"));
for (let i = 1; i <= elemn; i++) {
    document.write(startx + " | ");
    startx += roznicay;
}
document.write("<br><br>");

// ZADANIE 13
let liczbaa, liczbab, suma13;
do {
    liczbaa = parseFloat(prompt("Podaj pierwsza liczbe (suma = 0 koniec):"));
    liczbab = parseFloat(prompt("Podaj druga liczbe (suma = 0 koniec):"));
    suma13 = liczbaa + liczbab;
    document.write(suma13 + " | ");
} while (suma13 !== 0);
document.write("<br><br>");

// ZADANIE 14
let liczbasilnia = parseInt(prompt("Podaj liczbe do obliczenia silni:"));
let silnia = 1;
for (let i = 1; i <= liczbasilnia; i++) {
    silnia *= i;
}
document.write(silnia + "<br><br>");

// ZADANIE 15
let dlugoscn = parseInt(prompt("Ile liczb ma miec ciag:"));
let startowaliczba = parseFloat(prompt("Podaj pierwsza liczbe ciagu:"));
for (let i = 1; i <= dlugoscn; i++) {
    document.write(startowaliczba + " | ");
    startowaliczba = startowaliczba * startowaliczba;
}
document.write("<br><br>");

// ZADANIE 16
let suma16 = 0;
for (let i = 1; i <= 10; i++) {
    let losowa = Math.floor(Math.random() * 51) + 50;
    suma16 += losowa;
}
document.write(suma16 + "<br>");
document.write((suma16 / 10) + "<br><br>");
