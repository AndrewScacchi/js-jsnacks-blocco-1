// JAVASCRIPT for the EXERCISE
console.log("Hello World!");
// Creare due array, 5 stringhe il primo, 2 il secondo

const firstArray = [
    "parola1-1",
    "parola2-1",
    "parola3-1",
    "parola4-1",
    "parola5-1"
];
const secondArray = [
    "parola1-2",
    "parola2-2"
];

//CORREZIONE ESERCIZIO

//seleziona ul di primo livello
const firstLevUl = document.querySelector("ul.first-level");

//level 1
for (let i = 0; i < firstArray.length; i++){
    //estrapolo contenuto iesimo del primo array
    let firstLevContent = firstArray[i];
    //creo il LI di primo livello
    let firstLevLi = document.createElement("li");
    //inserisco il contenuto del LI, primo livello
    firstLevLi.append(firstLevContent);
    //inserisco il LI di primo livello creato nel UL di primo livello.
    firstLevUl.append(firstLevLi);

    //questo creato serve fuori del 2nd ciclo for per evitare ripetizioni
    let secondLevUl = document.createElement("ul");

    //livello 2 annidamento
    for (let j = 0; j < secondArray.length; j++){
        let secondLevContent = secondArray[j];
        let secondLevLi = document.createElement("li");

        secondLevLi.append(secondLevContent);
        secondLevUl.append(secondLevLi);
        firstLevLi.append(secondLevUl);

    }

}


//SECOND TEST REDUX

const ulExt = document.querySelector("ul.second-test");

// creo una UL con LI in base all'array dato
for (a = 0; a < firstArray.length ; a++){
    let liExt = document.createElement(`li`);
    let liExtContent = firstArray[a];

    liExt.append(liExtContent);
    ulExt.append(liExt);
    
    let ulInt = document.createElement("ul");
    
    for (e = 0; e < secondArray.length; e++){
        let liInt = document.createElement("li");
        let liIntContent = secondArray[e];

        liInt.append(liIntContent);
        ulInt.append(liInt);
        liExt.append(ulInt);
    }
}
//ANALISI
// Deduco che il mio errore sia stato invertire le dichiarazioni append(), appendevo a un elemento un elemento non ancora definito e il programma gettato un null error..
