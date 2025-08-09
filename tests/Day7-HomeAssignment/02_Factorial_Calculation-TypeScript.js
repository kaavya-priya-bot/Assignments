var num;
function factorial(n) {
    var fact = BigInt(1);
    if (n < 0) {
        throw new Error("I/p is negative");
    }
    for (var index = 2; index <= n; index++) {
        fact *= BigInt(index);
    }
    return fact;
}
num = 6;
console.log("The factorial of ".concat(num, " is ").concat(factorial(num)));
num = 46;
console.log("The factorial of ".concat(num, " is ").concat(factorial(num)));
num = 0;
console.log("The factorial of ".concat(num, " is ").concat(factorial(num)));
num = -2;
console.log("The factorial of ".concat(num, " is ").concat(factorial(num)));
