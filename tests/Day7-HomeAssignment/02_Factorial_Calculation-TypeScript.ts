let num:number;
function factorial(n:number):BigInt{
let fact=BigInt(1);
if(n<0){
    throw new Error(`I/p is negative`);
}
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