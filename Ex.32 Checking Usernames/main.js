// Array of current users
var current_users = ["Ayeza", "Shoaib", "habib", "Sarim", "Dua"];
// Array of New users
var new_users = ["Shoaib", "Zohaib", "Shahid", "Sarim", "Tahir"];
// Loop through New users to check the usernames availibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exists and save in our condiotion variable 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using if-else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
