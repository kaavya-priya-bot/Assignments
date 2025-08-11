

let user1 :{
firstname:string,
lastName:string,
email:string,
age:number,
isActive:boolean
}={
firstname:"Ravindran",
lastName:"R",
email:"ravi@testleaf",
age:34,
isActive:true
}

//To access the different properties, you can use the dot notation

//objectName.property

console.log(user1.firstname);
console.log(user1.lastName);
console.log(user1.email);

//square brackets notation

let user2 :{
"first-name":string,
lastName:string,
email:string,
age:number,
isActive:boolean
}={
"first-name":"Ravindran",
lastName:"R",
email:"ravi@testleaf",
age:34,
isActive:true
}

console.log(user2["first-name"]);
