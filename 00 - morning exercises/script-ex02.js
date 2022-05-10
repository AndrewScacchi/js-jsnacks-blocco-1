// SCRIPT for Exercise-02
console.log("hello world!");

//create an empty Array
const randomNumArray = [];

//generate a random num between 1 and 1000
function getRandomInt() {
    return Math.floor(Math.random() * 1000 + 1);
  }
// add 20 random num to Array  
for (i=0; i < 20 ; i++){
    randomNumArray.push(getRandomInt());    
}

const button = document.querySelector("button.btn");
const listEven = document.querySelector("ul.array-even");
const listOdd = document.querySelector("ul.array-odd");

// button.addEventListener("click", function(){
//     listEven.innerHTML = ``;
//     listOdd.innerHTML = ``;
    // listEven.textContent = '';    
    // listOdd.textContent = '';

    // var li = document.querySelector('li');
    // listEven.removeChild(li);
    // listOdd.removeChild(li);

    // const elem = document.querySelector('li:first-child');
    // elem.parentElement.removeChild(elem);  


    for (i = 0 ; i < randomNumArray.length; i++){
        const li = document.createElement(`li`);
        
        if (randomNumArray[i] % 2 == 0 ) {
            listEven.append(li);
            li.append(randomNumArray[i]);
            // listEven.innerHTML += `<li> ${randomNumArray[i]} </li>`;
        } else {  
            listOdd.append(li);
            li.append(randomNumArray[i]);
            // listOdd.innerHTML += `<li> ${randomNumArray[i]} </li>`;
        }

        let

    }
// });

// sull'evenListener non funziona comunque. quaunque cosa faccia, non funziona. voglio che al click del button ci sia un refresh degli elementi nell'UL e nuovi elementi prendano il loro posto, ma non funziona. a questo punto rimuovo il addEvenListener
