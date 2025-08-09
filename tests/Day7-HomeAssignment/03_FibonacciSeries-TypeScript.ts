
function fibonacciSeries(length:number):void{
    let num1 = 0, num2 = 1;
    process.stdout.write(`Fibonacci Series: `);
    for (let i = 0; i < length; i++) {
            process.stdout.write(`${num1}  `);
            let num3 = num1+num2;
            num1 = num2;
            num2 = num3;
        }
        process.stdout.write(`\n`);
}
fibonacciSeries(4);
fibonacciSeries(10);

