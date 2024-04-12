//Creating a Guestlist Array
let guestList = ["Sarim", "Habib", "Ayeza", "Shoaib"];

//Making variable for those guest who cant come
let dontCome  = guestList[2];

// Print the Name of guest who cant come
console.log(dontCome, "cant come");

// Add or Remove Values from Guest List Array
guestList.splice(2, 1, "Shahid");

// Message Print for big table
console.log("Good News ! We have Found a Big Table For Dinner");

// Adding a new guest at starting index of array
guestList.unshift("Zuhaib");

// Adding a new guest at end index of array
guestList.push("Tahir");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");

// Print message of Updated List
console.log("Updated List of our Guests");

// sending an invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salaam ${oneguest}, would you like to come to dinner tomorro?`));