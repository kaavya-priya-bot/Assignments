//using var we can redeclare and reassign
var username="kaavya@gmail.com";
var username="MAhi@gmail.com";//redeclaration

username="MahiKaavya@gmail.com";//reassignment

console.log(username);

//using let we cannot redeclare but reassign
let AccBalance=20000;
//let AccBalance="MAhi@gmail.com";//redeclaration is not allowed

AccBalance=50000;//reassignment is allowed
console.log(AccBalance);

//using const we cannot redeclare and reassign
const username2=2345637;
//const username2="java@gmail.com";//redeclaration is not allowed
//username2=345354654;//reassignment is not allowed

console.log(username2);
