//
let userName = ["Ayeza", "Shoaib", "Habib", "Admin", "Sarim"]

// Removing an Arrays
userName = [] 

if (userName.length === 0){
console.log("Your Array is an empty We need to find some users!");
}else{
    // Using ForEach Loop on Array
userName.forEach(oneUser => {
            if (oneUser === "Admin"){
      console.log(`Hello ${oneUser}, Would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, Thank you for logging again`);
        }
    })
    
}
 