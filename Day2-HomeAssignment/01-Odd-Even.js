// function determining whether a given number is odd or even.
const input=2;
function isOddOrEven(number){
    if(number%2===0){
        return "Even";
    }
 return "odd";
}

console.log(`The given number ${input} is `+isOddOrEven(input));