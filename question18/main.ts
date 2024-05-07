// Making a array of countries and print its original order
let countriesToVisit : string [] = ["peris","london","switerzland","canada"];
console.log("original order", countriesToVisit);

//Print the array in alphabtical order without modifying the actual Array list
console.log("Alphabetical Order", [...countriesToVisit].sort());

// Show that the array in its original order
console.log("still in its original oder",countriesToVisit);

//Print the array in reverse order without mlodifying the actual array list
console.log("Reverse order",[...countriesToVisit].reverse());

// Show that the array in its original order
console.log("still in its original oder",countriesToVisit);

// We have changed the original order Now
console.log("Original order reversed",countriesToVisit.reverse());

// Print the array to show that its back its original order
console.log("Back to original order reversed", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in alphabetical order:",countriesToVisit.sort());

// We have changed again the original order Now
console.log("Original order reversed",countriesToVisit.reverse());