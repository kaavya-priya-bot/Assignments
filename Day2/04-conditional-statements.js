/* function findNumberType(number){
if(number>0){
    console.log("Its positive");
}
else if(number===0){
    console.log("Its neutral")
}
else if(number<0){
    console.log("Its negative")
}
else{
    console.log("Check input");
}
}
findNumberType(-2); */

function findNumberType(number){
    switch(true){
    case number>0:
    console.log("Its positive");
    break;

    case number===0:
    console.log("Its neutral");
    break;

    case number<0:
    console.log("Its negative");
    break;

    default:
    console.log("Check input");
    

    }
}
findNumberType(0);