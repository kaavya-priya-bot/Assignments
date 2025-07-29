// Promise to simulate tasks like fetching data with Timeout
function fetchDataFromDatabase(){ 
let fetchData=new Promise((resolve,reject) => {   
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
fetchData
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })

return fetchData;
}
fetchDataFromDatabase();    
