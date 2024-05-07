//Define a function with rest perameter that accept aurguments repreting our sandwich 

function makeSandwich (...items: string[]){
    console.log("\n Making a sandwich with different item :\n");
    
    items.forEach (singleItem =>console.log (singleItem));
    
    console.log("\nNow enjoy sandwich\n")
}
//call the functions three times with different number of aurgument

makeSandwich("chicken", "mayoniess","ketchup", "cheese");

makeSandwich("Bread", "butter");

makeSandwich("chicken", "butter", "egg", "cabbage","cheese", "Iceberg")
