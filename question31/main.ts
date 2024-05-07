let userName = ["Ambreen", "Kanwal","Admin", "Ayesha", "Areeba"];

userName = []
if (userName.length === 0){
    console.log("your array is empty We need to find some users!");
}else{
    // Using foe each loop in Array
userName.forEach(oneUser => {
    if(oneUser==="Admin"){ 
    console.log(`Hello ${oneUser}, would you like to see a status report?`)
}else{
    console.log(`Hello ${oneUser}, thank you for logging in again.`)
}
})
}