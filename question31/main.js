var userName = ["Ambreen", "Kanwal", "Admin", "Ayesha", "Areeba"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty We need to find some users!");
}
else {
    // Using foe each loop in Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
