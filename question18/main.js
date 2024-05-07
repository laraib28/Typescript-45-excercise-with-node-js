var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its original order
var countriesToVisit = ["peris", "london", "switerzland", "canada"];
console.log("original order", countriesToVisit);
//Print the array in alphabtical order without modifying the actual Array list
console.log("Alphabetical Order", __spreadArray([], countriesToVisit, true).sort());
// Show that the array in its original order
console.log("still in its original oder", countriesToVisit);
//Print the array in reverse order without mlodifying the actual array list
console.log("Reverse order", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array in its original order
console.log("still in its original oder", countriesToVisit);
// We have changed the original order Now
console.log("Original order reversed", countriesToVisit.reverse());
// Print the array to show that its back its original order
console.log("Back to original order reversed", countriesToVisit.reverse());
//Print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort());
// We have changed again the original order Now
console.log("Original order reversed", countriesToVisit.reverse());
