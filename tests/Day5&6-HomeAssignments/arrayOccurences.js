const nums = [2,4,5,2,1,2]; 
const k = 2;
function findOccurence(array,integer){
    let count=0;
for(let index=0;index<array.length;index++)
{
    if(array[index]===k){
        count++;
    }
}
return count;
}
console.log(`No of occurrences of \"${k}\" is ${findOccurence(nums,k)}`);