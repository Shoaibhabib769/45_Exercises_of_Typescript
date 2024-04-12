// Array of current users
let current_users = ["Ayeza", "Shoaib", "habib", "Sarim", "Dua"]

// Array of New users
let new_users = ["Shoaib", "Zohaib", "Shahid", "Sarim", "Tahir"]

// Loop through New users to check the usernames availibility
new_users.forEach(new_one_user => {

    // Making a Condition for username already exists and save in our condiotion variable 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print different messages using if-else statement
if (our_condition) {
    console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})