var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of contries and print its original order 
var countriesToVisit = ["London", "New York", "Paris", "Beijing"];
console.log("original order;", countriesToVisit);
// print an array in alphabetical order without modifying the actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its original order
console.log("still in original order", countriesToVisit);
// print the array in reversed order without modifying actual list
console.log("reverse order", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its original order
console.log("still in original order", countriesToVisit);
// We have changed the original Array Order
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the Array to show that it's still in its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in alphabetical order
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
// We have changed again the original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
