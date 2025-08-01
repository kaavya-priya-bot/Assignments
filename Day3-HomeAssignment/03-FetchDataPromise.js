// Promise to simulate tasks like fetching data with Timeout
function fetchDataFromDatabase(){ 
 return new Promise((resolve,reject) => {   
const data = false;
console.log("Fetching data from database...");
setTimeout(()=>{
if(data){
    resolve("Data fetched successfully!");
}
else{
    reject("Data not found!");
}
},2000)
});
}

fetchDataFromDatabase()
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })




