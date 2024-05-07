// Array of current users
var current_Users = ["Areeba", "ayesha", "Anum", "Munnazza", "Rida"];
//Array of new users
var new_Users = ["Kanawal", "Hina", "Ayesha", "Munnazza", "Neha"];
// loop through new-users to check n ew users name avaibilty
new_Users.forEach(function (new_one_user) {
    // Making a condition for user name exists and save in our_condition variable
    var our_condition = current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if . else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this user name ".concat(new_one_user, "is available"));
    }
});
