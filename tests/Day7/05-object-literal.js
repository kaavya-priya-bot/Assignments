var user = {
    firstname: "Ravindran",
    lastName: "R",
    email: "ravi@testleaf",
    age: 34,
    isActive: true
};
//To access the different properties, you can use the dot notation
//objectName.property
console.log(user.firstname);
console.log(user.lastName);
console.log(user.email);
//square brackets notation
var user1 = {
    "first-name": "Ravindran",
    lastName: "R",
    email: "ravi@testleaf",
    age: 34,
    isActive: true
};
console.log(user1["first-name"]);
