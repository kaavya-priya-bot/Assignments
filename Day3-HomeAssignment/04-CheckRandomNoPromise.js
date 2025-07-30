//Promise to check Random Number within a limit
function checkRandomNumber(){
let conditionalPromise=new Promise((resolve,reject) => {
let randomNo=Math.random();
console.log("Generated random number:"+randomNo);
if(randomNo>0.5){
    resolve("Random number accepted hence \"Resolved successfully\"");
}else{
    reject("Random number not accepted hence \"Rejected\"");
}
});
conditionalPromise
.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
})
return conditionalPromise;
}
checkRandomNumber();