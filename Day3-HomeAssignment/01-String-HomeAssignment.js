//Function to return the length of the last word in the string
console.log("***********LengthOfTheLastWord***********");
function lengthOfTheLastWord(word){
let arrayOfString=word.split(" ");
let lastWord=arrayOfString[arrayOfString.length-1];
let length=lastWord.length;
console.log(`Last word is ${lastWord} and its length is ${length}`);
}
lengthOfTheLastWord("Hello World");

//Function to return the length of the last word in the string with trim
console.log("***********LengthOfTheLastWordWithTrim***********");
function lengthOfTheLastWordWithTrim(word){
let trimWord= word.trim();
let arrayOfString=trimWord.split(" ");
let lastWord=arrayOfString[arrayOfString.length-1];
console.log(`Last word of the given string is ${lastWord}`);
let length=lastWord.length;
return length;
}
let word="   fly me   to   the moon  ";
console.log(`Length of the last word of the String \"${word}\" is ${lengthOfTheLastWordWithTrim(word)}`);

//Function Anagram
console.log("*************Anagram*************");
const funReomoveSpaceToLowerCase= (text) => text.split(" ").join("").toLowerCase();
const sortString= (text) => text.split("").sort().join('');
function isAnagram(word1,word2){
    
    if(word1.length!=word2.length){
        return `${word1} and ${word2} is not anagram`;
    }
    else{
        if(sortString(funReomoveSpaceToLowerCase(word1))===sortString(funReomoveSpaceToLowerCase(word2))){
            return `${word1} and ${word2} is anagram`;
        }else
            return `${word1} and ${word2} is not anagram`;
    }
}
console.log (isAnagram('listen', 'silent'));
console.log (isAnagram('hello', 'world'));