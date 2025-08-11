let num:number;
//function named `factorial` that accepts an argument `n`, which is a non-negative integer, and returns its factorial
function factorial(n:number):BigInt{
let fact=BigInt(1);
if(n<0){
    throw new Error(`I/p is negative`);// If a negative number is passed, the function should throw an error.
}
// Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer from 2 up to `n`. 
for(let index=2;index<=n;index++){
    fact*=BigInt(index);
}
return fact;
}
num=6;
console.log(`The factorial of ${num} is ${factorial(num)}`);
num=46;
console.log(`The factorial of ${num} is ${factorial(num)}`);
num=0;
console.log(`The factorial of ${num} is ${factorial(num)}`);
num=-2;
console.log(`The factorial of ${num} is ${factorial(num)}`);