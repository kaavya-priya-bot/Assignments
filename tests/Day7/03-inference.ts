/* Implicit Type inference:
When the TS compiler is able ti infer the datatype the variable is holding

Explicit Type inference: Is also called as type annotation

We as user would explicity confirm that datatype the variable is going to hold*/

let num=42 // Implicit Inference
let message="Hello"


function funName1(a:number,b:number):void{ // explicit inference

    // let a=10;
    // let b=10;
    let c=a+b
    console.log(c);
    
}

funName1(20,20)
//console.log(funName1(10,10))