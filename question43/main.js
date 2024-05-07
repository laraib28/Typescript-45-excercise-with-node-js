//Define a function to megicians name
function show_megician(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "The great ".concat(name); });
}
//Define an array with megician name
var megician_name = ["Ali", "Usman", "Adnan", "Kamran"];
//Making a copy of original through slice  function
var copy_megician_name = megician_name.slice();
//modify the copy arr(ay to include "the great" with their names
make_great(copy_megician_name);
var copy_great_name = make_great(copy_megician_name);
//Show both arrays original and copy
//original
show_megician(megician_name);
//copy
show_megician(copy_great_name);
