// Creatin an Array
let userNames = ["Ayeza", "Shoaib", "Habib", "Admin", "Sarim"];

// Using Foreach loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin"){
  console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging again`);
    }
})



