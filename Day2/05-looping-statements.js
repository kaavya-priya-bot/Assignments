//for loop
console.log("***for***");
for(let index=1;index<=10;index++){
    console.log(index);
}

//for-each
console.log("***for-each***");
let automationTools=["playwright","selenium","puppeteer"];

automationTools.forEach(function(i){
    console.log(i);
});

//while
console.log("***while***");
let count=10;
while(count){
    console.log(count);
    count--;
}

//do-while
console.log("***do-while***");
let num=10;
do{
    console.log(num);
    num++;
}while(num<=5);