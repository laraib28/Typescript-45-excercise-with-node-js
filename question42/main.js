//Define a function to megicians name
function show_megician(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "The great ".concat(name); });
}
//Define an array with megician name
var megician_name = ["Ali", "Usman", "Adnan", "Kamran"];
var great_megician = make_great(megician_name);
console.log(great_megician);
