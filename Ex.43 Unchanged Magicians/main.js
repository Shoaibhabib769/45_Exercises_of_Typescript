//
var unchangedmagicianNames = ["Ayeza", "Shoaib", "Habib", "Sarim", "Dua Habib"];
// Making a copy of an array
var unchangedmagicianNames2 = ["Sarim", "Nasir", "Habib"];
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, unchangedmagicianNames2_1 = unchangedmagicianNames2; _i < unchangedmagicianNames2_1.length; _i++) {
        var item = unchangedmagicianNames2_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
// Unchanged magician names
console.log(unchangedmagicianNames);
