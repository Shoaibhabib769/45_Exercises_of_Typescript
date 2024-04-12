// Creatin an Array
var userNames = ["Ayeza", "Shoaib", "Habib", "Admin", "Sarim"];
// Using Foreach loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging again"));
    }
});
