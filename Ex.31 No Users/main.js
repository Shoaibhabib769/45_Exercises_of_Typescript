//
var userName = ["Ayeza", "Shoaib", "Habib", "Admin", "Sarim"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array is an empty We need to find some users!");
}
else {
    // Using ForEach Loop on Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging again"));
        }
    });
}
// Remove 
