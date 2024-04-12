// 
var greatmagicianNames = ["Ayeza", "Shoaib", "Habib", "Sarim", "Dua Habib"];
function show_magician(greet) {
    for (var _i = 0, greatmagicianNames_1 = greatmagicianNames; _i < greatmagicianNames_1.length; _i++) {
        var item = greatmagicianNames_1[_i];
        console.log(greet, item);
    }
}
;
show_magician("Hello, How are you Mr.");
