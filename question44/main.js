//Define a function with rest perameter that accept aurguments repreting our sandwich 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with different item :\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy sandwich\n");
}
//call the functions three times with different number of aurgument
makeSandwich("chicken", "mayoniess", "ketchup", "cheese");
makeSandwich("Bread", "butter");
makeSandwich("chicken", "butter", "egg", "cabbage", "cheese", "Iceberg");
