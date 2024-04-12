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

// Inform that only two guests can be invited to dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// using While-loop to remove guests from the array untill only two remain 
while(guestList.length > 2){
  let removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

// Sending an invitation to the last two guests on the list
console.log("invitation to the last 2 Guests");
guestList.forEach(lasttwo => console.log(` Luckily ${lasttwo}, you are still invited to dinner`));

// Removing last two Guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);