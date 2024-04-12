// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating three variables with different values
var album1 = make_album("Shoaib Habib", "Album title 1");
var album2 = make_album("Ayeza Sarim", "album title 2");
// Calling a make album function with third parameter
var album3 = make_album("Album 3", "album title 3", 15);
// printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
