//Union type
var username;
username = "ravi@testleaf.com";
username = 99898989;
var accountNumber = "tyyuiu123412";
accountNumber = 123412312;
accountNumber = false;
function invokeBrowsers(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome Browser");
    }
    else {
        console.log("Firefox Browser");
    }
}
invokeBrowsers("Chrome");
var userProfileQA = {
    adminName: "Testleaf",
    privileges: ['server'],
    name: "Ravindran",
    empId: 1001,
    date: "09/Aug./2025"
};
console.log(userProfileQA.adminName); // Testleaf
console.log(userProfileQA.privileges); //[ 'server' ]
