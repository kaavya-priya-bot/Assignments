/* DataTypes :
1. number
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never */


//variableDeclaration varName:datatype=value;

let firstName : string ="Ravindran"
console.log(firstName);

let number : number[]=[20,22,23,24];


let data:any="Message received from the server";
data=1234;
data=true;

let value : unknown; // dsimilar to that of any with some conditioning
value=43;
value="Hello";

if (typeof value ==="string") {
    console.log(value.toUpperCase());    
}

/* function infiniteLoop():never{
while (true) {
    console.log("Looping forever");   
}

}

infiniteLoop() */


//tuple


let user: [string, number, boolean] = ["Testleaf", 25, true];
console.log(user[1]); // 25