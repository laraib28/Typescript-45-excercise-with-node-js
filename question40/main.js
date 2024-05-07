// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return (album);
}
// calling three function with different value
var album1 = make_album("Adnan", "Album title 1");
var album2 = make_album("usman", "Album title  2");
// Calling a make_album function with different perameter
var album3 = make_album("Ali", "Album title 3", 10);
// Printing values of object created my function
console.log(album1);
console.log(album2);
console.log(album3);
