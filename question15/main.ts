let guestList = ["hina", "hira", "kanwal", "ayesha"];

let dontCome =  guestList[1];

console.log (dontCome, "she could not come");

guestList.splice(1 ,1 , "areeba");

guestList.forEach(guest => console.log (`salam ${guest}, would you like to dinner with me`));
