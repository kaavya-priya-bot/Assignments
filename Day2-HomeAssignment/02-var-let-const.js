//var vs let vs const and variable scoping 
const browserName="Chrome";
function getBrowserName(){
var browserName="firefox";
if(browserName==="Chrome"){
     console.log(browserName);
}else{
    let browserName="webkit";
    console.log(browserName);
}
console.log(browserName);
}
getBrowserName();
console.log(browserName);