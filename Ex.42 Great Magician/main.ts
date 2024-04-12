// 
let greatmagicianNames = ["Ayeza", "Shoaib", "Habib", "Sarim", "Dua Habib"];

function show_magician(greet: string){
    for(let item of greatmagicianNames){
        console.log(greet, item);
    }
    
};
show_magician("Hello, How are you Mr.");