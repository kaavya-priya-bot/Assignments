let batonDelivery=new Promise((resolve,reject) => {
let isBatonPassed=false;
if(isBatonPassed){
    resolve("baton is successfully handed over")
}else{
    reject("Baton was dropped");
}
});
batonDelivery
.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
})