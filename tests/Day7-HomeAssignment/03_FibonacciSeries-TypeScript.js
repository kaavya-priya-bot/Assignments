function fibonacciSeries(length) {
    var num1 = 0, num2 = 1;
    process.stdout.write("Fibonacci Series of length ".concat(length, " : "));
    for (var i = 0; i < length; i++) {
        process.stdout.write("".concat(num1, "  "));
        var num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    process.stdout.write("\n");
}
fibonacciSeries(4);
fibonacciSeries(10);
fibonacciSeries(19);
