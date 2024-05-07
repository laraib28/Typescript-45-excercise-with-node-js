var guestList = ["hina", "hira", "kanwal", "ayesha"];
var dontCome = guestList[1];
console.log(dontCome, "she could not come");
guestList.splice(1, 1, "areeba");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me")); });
