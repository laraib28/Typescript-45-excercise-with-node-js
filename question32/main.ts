// Array of current users

let current_Users = ["Areeba", "ayesha", "Anum","Munnazza","Rida"];
 
//Array of new users

let new_Users = ["Kanawal", "Hina", "Ayesha", "Munnazza","Neha"];

// loop through new-users to check n ew users name avaibilty

new_Users.forEach(new_one_user =>{
    // Making a condition for user name exists and save in our_condition variable
    let our_condition = current_Users.some(current_one_user => current_one_user.toLowerCase()  === new_one_user.toLowerCase())
// print different messages using if . else statement
if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)
}else{
    console.log(`this user name ${new_one_user}is available`)
}
})
    




 