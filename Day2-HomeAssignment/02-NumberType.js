/* function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type. */
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
findNumberType(-15);