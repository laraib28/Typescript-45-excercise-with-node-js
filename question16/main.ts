//creating a guest list array//
let guestList =["ayesha", "areeba", "hira","kanwal"];

//making variable for thoe who cant come//
let dontcome = [0];

//print a message the guest who cant come//
console.log(dontcome, "she could not come");

//Add or remove values from guest list array
guestList.splice(0, 1 ,"rida");

//Message print for bigger table
console.log("Good News I have Found a Bigger Table for Dinner");

//Adding a new guest at starting index ;of array
guestList.unshift("hina");

//Adding a new guest at ending index of the array//
guestList.push("naila");

//Get a middle index of our guest list array//
let middleIndex : number =  Math.floor (guestList.length / 2);

//Adding a new guest at ending index of the array//
guestList.splice(middleIndex,0, "aqsa");

//print message of update list
console.log("update list of our guest");

//sending a message to our guests one by one with their names
guestList.forEach(oneGuest => console.log (`salam ${oneGuest}, would you like to dinner with me`))
