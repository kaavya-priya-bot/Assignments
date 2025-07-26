function checkAvailability(movieName,callback){
console.log(`checking the movie name:`);

setTimeout(() => {
console.log("Movie "+movieName+" is Available");
 callback();   
}, 2000);
}
function playMovie(){
    console.log(`Now playing the movie`);
}

checkAvailability("SpideName",playMovie);