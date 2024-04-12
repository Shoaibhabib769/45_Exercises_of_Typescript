//
// array as a parameter

function mySandwitches(...item: string []){
    return `I want Sandwitche of ${item}`;
};

let firstCollection = mySandwitches("Ham", "Cheez", "lettuce");

let collection2 = mySandwitches("America", "China");
let collection3 = mySandwitches();
console.log(firstCollection);
console.log(collection2);
console.log(collection3);