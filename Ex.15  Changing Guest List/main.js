var guestList = ["Sarim", "Habib", "Ayeza", "Shoaib"];
var dontCome = guestList[2];
console.log(dontCome, "Cant come");
guestList.splice(2, 2, "Shahid");
guestList.forEach(function (guest) { return console.log("Salaam ".concat(guest, ", would you like to come to dinner today?")); });
