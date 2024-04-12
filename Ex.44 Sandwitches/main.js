//
// array as a parameter
function mySandwitches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return "I want Sandwitche of ".concat(item);
}
;
var firstCollection = mySandwitches("Ham", "Cheez", "lettuce");
var collection2 = mySandwitches("America", "China");
var collection3 = mySandwitches();
console.log(firstCollection);
console.log(collection2);
console.log(collection3);
