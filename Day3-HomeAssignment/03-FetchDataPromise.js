// Promise to simulate tasks like fetching data with Timeout
function fetchDataFromDatabase(){ 
let fetchData=new Promise((resolve,reject) => {   
const data = true;
console.log("Fetching data from database...");
if(data){
    resolve("Data fetched successfully!")
}else{
    reject("Data not found!");
}
});
setTimeout(() => {
fetchData
.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
})
}, 3000);
return fetchData;
}
fetchDataFromDatabase().console;
