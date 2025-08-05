

let heterogenousArray = ["Javascript",10,9,8,7,"TypeScript","C#"];

let sortedArray = heterogenousArray.sort((a,b)=>{
//Check if both are numbers

if (typeof a === "number" && typeof b ==="number"){
return a-b; // sort the numbers in ascending order
}

//if one is number and one is string
if( typeof a === "number"){
return -1; // number has to come before string
}

if (typeof b==="number"){
return 1;// string comes after the number
}

//if both are strings
return a.localeCompare(b); // sort strings alphabetically
});

console.log(sortedArray);

