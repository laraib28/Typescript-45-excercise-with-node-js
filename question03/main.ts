let myName : string = "laraib tabbassum"
console.log (myName.toUpperCase());


let myName2 : string ="LARAIB TABBASSUM"
console.log (myName2.toLowerCase());

let myName3 : string = "laraib tabbassum";
console.log(myName3.replace(/\b\w/g, (char) => char.toUpperCase()));