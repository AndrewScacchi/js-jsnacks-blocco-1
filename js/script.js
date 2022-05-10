// JAVASCRIPT for the EXERCISE
console.log("Hello World!");
// Creare due array, 5 stringhe il primo, 2 il secondo

const arrayBig = [
    "coccodrillo",
    "gatto",
    "cane",
    "piccione",
    "porceddu"
];
const arraySmall = [
    "cotto alla griglia",
    "cotto alla piastra"
];

console.log(arrayBig);
console.log(arraySmall);

const arrayExt = document.querySelector("ul.list-external");

for (i = 0; i < arrayBig.length ; i++){
    arrayExt.innerHTML += `<li class="li-ext"> ${arrayBig[i]} </li>`;
    

}

