//using var we can redeclare and reassign
var userName="kaavya@gmail.com";
var userName="Mahi@gmail.com";//redeclaration

userName="MahiKaavya@gmail.com";//reassignment

console.log(userName);

//using let we cannot redeclare but reassign
let accBalance=20000;
//let AccBalance="MAhi@gmail.com";//redeclaration is not allowed

accBalance=50000;//reassignment is allowed
console.log(accBalance);

//using const we cannot redeclare and reassign
const userName2=2345637;
//const username2="java@gmail.com";//redeclaration is not allowed
//username2=345354654;//reassignment is not allowed

console.log(userName2);
