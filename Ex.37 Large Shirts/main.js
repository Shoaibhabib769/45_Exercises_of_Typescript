"use strict";
// Making a function
function make_shirt(size = "Large", printMessage = "I Love TS") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with b - default value
make_shirt();
// Calling a function with now with medium size - default message
make_shirt("Medium");
// Calling a function now with small size and diffrent print message
make_shirt("Small", "I Love JavaScript");
