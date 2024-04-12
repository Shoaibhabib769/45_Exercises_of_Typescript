//
let unchangedmagicianNames = ["Ayeza", "Shoaib", "Habib", "Sarim", "Dua Habib"];

// Making a copy of an array
let unchangedmagicianNames2 = ["Sarim", "Nasir", "Habib"];

function show_magicians(greet: string){
    let withGreetings = "";

    for(let item of unchangedmagicianNames2){
        withGreetings += `${greet} ${item}\n`;
    }

    return withGreetings;
}

let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);

// Unchanged magician names original array
console.log(unchangedmagicianNames);