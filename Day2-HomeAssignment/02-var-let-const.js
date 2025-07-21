//var vs let vs const and variable scoping 
const browserName="Chrome";
function getBrowserName(){
var browserName="Chrome"
if(browserName==="Chrome"){
    let browserName="chromeLet";
    console.log(browserName);
}
console.log(browserName);
}
getBrowserName();
console.log(browserName);