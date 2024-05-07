//Define vaviables
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange", "grapes"];
// Test for equality and unequality for string
console.log("apple is equal to apple");
console.log(apple == apple);
console.log("\napple is not equal to apple");
console.log(apple != apple);
//Test for lower case function
console.log("\n APPLE is equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\n APPLE is not equal apple after concerting to lower case ");
console.log(upperCaseApple.toLowerCase() != "apple");
//Numerical test 
console.log("\n Is ten is equal to twenty");
console.log(ten == twenty);
console.log("\n Is ten not equal to twenty");
console.log(10 != twenty);
//Greater than
console.log("\n Is ten is greater than zero");
console.log(10 > 0);
//Less than
console.log("\n Is twenty less than 10");
console.log(20 < ten);
// Greater than or equal to
console.log("\n Is ten is greater than or equal to 5");
console.log(10 >= 5);
//Less than or equal to
console.log("\n Is twenty is lessthan or equal to 5");
console.log(10 <= 5);
//Test using "and" && " operator
console.log("\n twenty is not equal to 10 or twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 or twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n twenty is greater than 50 OR twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\n twenty is greater than 50 OR twenty is not equal to 20");
console.log(twenty > 50 || twenty != 20);
//Test whether an item is in a array
console.log("\n orange is include in my fruits array");
console.log(fruits.includes("orange"));
//not include
console.log("\n Is orange  not include in my fruits array");
console.log(fruits.includes("orange"));
