//named function: -> get hoisted
function funName1(a,b){
 //   let a=10;
  //  let b=10;
    return a+b;
}
console.log(funName1(10,10));

//Anonymous function / function expression-no hoisting
let funName2= function (){
    console.log("Hello Team this is an anonymous function")
    }
    funName2();

//Arrow Function :replace function with fat array -> no hoisting
let funName3=  () => {
    console.log("Hello Team this is an anonymous function")
    }
    funName3();

//Single line arrow function
const funName4= (a,b) => a*b;
console.log(funName4(2,3));
