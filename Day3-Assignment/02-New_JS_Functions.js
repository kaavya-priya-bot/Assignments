//Named function
function userProfile(name) {
    console.log(`Hello, ${name}!`)
}
userProfile("Kaavya");

//Arrow Function
let double1 = (number) => {
    return number * 2;
}
console.log("Double Value: " + double1(4));

//Anonymous Function
let anonFun = function () {
    setTimeout(() => {
        console.log("This message is delayed by 2 seconds");
    }, 2000);
}
anonFun();

//Callback Function
function getUserData(msg,callback) {
    setTimeout(() => {
        console.log(msg);
          callback();  
    }, 3000);
}
function callbackFun() {
    console.log("Call Back Function");
}
getUserData("Message",callbackFun);
