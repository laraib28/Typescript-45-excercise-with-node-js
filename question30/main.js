// Creating a Array
var userName = ["Ambreen", "hira", "Munnaza", "Amber"];
// Using foe each loop in Array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", tgank you for logging in again."));
    }
});
