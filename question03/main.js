var myName = "laraib tabbassum";
console.log(myName.toUpperCase());
var myName2 = "LARAIB TABBASSUM";
console.log(myName2.toLowerCase());
var myName3 = "laraib tabbassum";
console.log(myName3.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
