// Making a Function
function make_shirt (size :string ="Large", printMessage : string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
// Calling a function
make_shirt();

// Calling a function with the medium size and default message
make_shirt("Medium");

//Calling a function now with the small size with different and also a different message

make_shirt("small", "I love javascript");