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

const ulExt = document.querySelector("ul.list-external");

// creo una UL con LI in base all'arrey dato
for (i = 0; i < arrayBig.length ; i++){
    const liExt = document.createElement(`li`);

    liExt.classList.add("li-ext");
    liExt.classList.add(`li-ext-${i+1}`);
    //appending for LI to UL and later content to LI
    ulExt.append(liExt);
    liExt.append(arrayBig[i]);

    let liInt = document.querySelector(`li-ext-${i+1}`);
    console.log(liInt);

    
   
}
//for each new LI created, create a new UL and an LI inside
for (i = 0; i < arrayBig.length ; i++){
    const liExt = document.querySelector(`.li-ext-${i+1}`);
    const ulInt = document.createElement("ul");
    
    liExt.append(ulInt);
    ulInt.classList.add(`ul-int-${i+1}`);
}

//ora per ogni ul-int-nn devo creare una nuova serie di LI

// for (i = 0; i < arraySmall.length ; i++){
//     const ulInt = document.querySelector(`.ul-int-${i+1}`);
//     const liInt = document.createElement("li");

//     ulInt.append(liInt);
//     liInt.append(arraySmall[i]);
//     liInt.classList.add("li-int");
    
    
// }






// seleziono ogni singolo LI creato e comando di creare al suo interno una UL e dei nuovi LI dal secondo array.Come fare? la parte di codice da assegnare è la stessa, quindi è un copia e incolla. Potrei assegnare ad ogni LI creato un id numerico e ragionare con quello.

