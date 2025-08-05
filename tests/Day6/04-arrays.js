//Using array literal

const { log } = require("node:console");


let arrayValue = ["a","b","c","d","e"]


//Using constructor

let numbers = new Array(5); // Creates an array with 5 empoty slots
numbers = [1,2,3,4,5]

//push --> add one or more elements to the end of the array
console.log("***********PUSH***************");
let letters = ["a","b","c","d","e"]
letters.push("f","g","h"); // ["a","b","c","d","e","f","g","h"]
console.log(letters);



//pop -> remove only one from the end of the array
console.log("***********POP***************");
letters.pop();
console.log(letters);// ["a","b","c","d","e","f","g"]


//shift -->remove only one element from the first part of trhe array
console.log("***********SHIFT***************");
letters.shift()
console.log(letters); //["b","c","d","e","f","g"]


//unshift -> add one more elements to the beginning of the array
console.log("***********UNSHIFT***************");
letters.unshift("x","y","z");
console.log(letters);// ["x","y","z","b","c","d","e","f","g"]


//slice()
//Extracts the section of an array without modifying the original array
//arrays.slice(startIndex,endIndex) 
//Negative values allowed
//if atrt index >= end Index then the result will be blank
console.log("***********SLICE***************");
let arrayVal = ["a","b","c","d","e"]
const result = arrayVal.slice(1,3);
//const result = arrayVal.slice(-4);
console.log(result);



//splice() --> add or remove the elments from the array
//array.splice(startIndex, deleteCount, ele1, ele2)
console.log("***********SPLICE***************");
arrayVal.splice(1,3,"x","y","z")
console.log(arrayVal);

//concatenation 

//spread syntax(...)
console.log("**********CONCAT(...)***************");
let numbers1 = [1,2,3,4];
let numbers2= [5,6,7,8];

let mergedArray = [...numbers1,...numbers2]

console.log(mergedArray);

//concat
console.log("***********CONCAT(.concat)***************");
let concatMerge = numbers1.concat(numbers2)
console.log(concatMerge);


//Sort Array
console.log("***********SORT***************");
let numberArray = [10,8,9,7]
numberArray.sort();
console.log(numberArray); // [ 10, 7, 8, 9 ]

console.log("***********ASC ORDER***************");
numberArray.sort((a,b)=>a-b); // acending order
console.log(numberArray); //[ 7, 8, 9, 10 ]
console.log("***********DESC ORDER***************");
numberArray.sort((a,b)=>b-a); // descending order
console.log(numberArray);//[ 10, 9, 8, 7 ]


//Extra learnings :


//10. filter
console.log("***********FILTER***************");
let even = numberArray.filter((num)=>num%2===0);//num = 10; 10%2===0, 9%2 ===0
console.log(even);

//11. map
console.log("***********MAP***************");
let squared = numberArray.map((num)=>num*num); //
console.log(squared);




