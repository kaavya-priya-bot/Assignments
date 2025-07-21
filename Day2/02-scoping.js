//named functions
/* function julyBatch(){
  let a=10;
  const b=10;
  return a+b;
}

console.log(julyBatch()); */
var genderType="Female";

function printGender(){
    let color="brown";
    if(genderType.startsWith("Female")){
        var age=30;
        color="pink";
        console.log("His/Her favourite color "+color);
    }else{
        var age=35;
        console.log("His/Her favourite color "+color);
    }
console.log(age);
}
printGender();
console.log(genderType); 