// SCRIPT for Exercise-01
console.log("hello world!");


//create an empty Array
const randomNumArray = [];

//generate a random num between 1 and 1000
function getRandomInt() {
    return Math.floor(Math.random() * 1000 + 1);
  }

// add 10 random num to Array  
for (i=0; i < 10 ; i++){
    randomNumArray.push(getRandomInt());    
}

for (i = 0 ; i < randomNumArray.length; i++){
    const list = document.querySelector("ul.array-list");
    const li = document.createElement(`li`);

    list.append(li);
    li.append(randomNumArray[i]);

}



  