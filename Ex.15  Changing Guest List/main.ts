let guestList = ["Sarim", "Habib", "Ayeza", "Shoaib"];

let dontCome = guestList[2];

console.log(dontCome, "Cant come");

guestList.splice(2, 2, "Shahid");

guestList.forEach(guest => console.log(`Salaam ${guest}, would you like to come to dinner today?`));
