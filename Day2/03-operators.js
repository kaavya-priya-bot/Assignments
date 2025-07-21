let x=10;
x+=5;
console.log(x);
x-=5;
console.log(x);
x*=5;
console.log(x);
let value=10;
//post-increment
console.log(value++);
console.log(value);
//pre-increment
console.log(++value);

//post-decrement
console.log(value--);
console.log(value);
//pre-decrement
console.log(--value);

/* 1.Strict Equality
1.Compare Datatype and Value */
console.log(1===1);
console.log(1==='1');
console.log("chrome"==="Chrome");
console.log(1===true);

/* 1.Loose Equality
1.Compare only Value */
console.log(1=='1');//bcoz in loose equality datatype gets converted
console.log(1==true);//boolean gets converted to number
console.log(true=="true");