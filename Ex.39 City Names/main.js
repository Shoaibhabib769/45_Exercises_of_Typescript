// creating a funtion with parameters which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// Calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Washinton", "Amerrica"));
console.log(city_country("Beijing", "China"));
