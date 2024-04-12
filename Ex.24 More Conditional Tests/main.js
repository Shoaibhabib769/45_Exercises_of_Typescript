// test for equality and inequality with strings
var apple = "apple";
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
// Test using the Lowercase function
var uppercasecow = "COW";
console.log("\nIs COW is equal to cow after converting to lowercase");
console.log(uppercasecow.toLocaleLowerCase() == "cow");
console.log("\nIs COW is not equal to cow after converting to lowercase");
console.log(uppercasecow.toLocaleLowerCase() != "cow");
//Numerical test involving equality and inequality
var ten = 10;
//equal to
console.log("\nIs ten is equal to twenty");
console.log(ten == 20);
// Not equal to
console.log("\nIs ten is not equal to twenty");
console.log(ten != 20);
//greater than
console.log("\nIs ten is greater than zero");
console.log(ten > 0);
//less than
console.log("\nIs twenty is less than ten");
console.log(20 < 10);
// greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);
//less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(20 <= 10);
// Tests using "and" & "or" operators
// Using and &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(20 != ten && 20 > ten);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(20 != ten && 20 > 30); // 20 == 20 ans  t
// Using || OR 
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test wether an item is include in array
var fruits = ["apple", "orange", "banana",];
console.log("\n Is orangge include in my fruits array");
console.log(fruits.includes("orange"));
// Not including
console.log("\n Is orangge not include in my fruits array");
console.log(!fruits.includes("orange"));
