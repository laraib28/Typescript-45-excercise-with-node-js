//Define a function to megicians name
function show_megician (megicians : string []){
megicians.forEach (name => console.log (name));
}

function make_great (megician : string []){
 return megician.map(name => `The great ${name}`);
}
//Define an array with megician name
let megician_name = ["Ali", "Usman","Adnan","Kamran"];

let great_megician = make_great(megician_name)

console.log(great_megician)
