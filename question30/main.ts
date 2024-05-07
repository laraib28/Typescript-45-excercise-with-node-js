// Creating a Array
let userName = ["Ambreen" ,"hira","Munnaza", "Amber"];

// Using foe each loop in Array
userName.forEach(oneUser => {
    if(oneUser==="Admin"){ 
    console.log(`Hello ${oneUser}, would you like to see a status report?`)
}else{
    console.log(`Hello ${oneUser}, thank you for logging in again.`)
}
})