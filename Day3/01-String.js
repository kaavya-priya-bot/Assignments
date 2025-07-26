
//String literal- "",'',',``

let firstName="Ravindran";
let userName="Ravindran";

//String Object // Heap memory - Every time new memory is created
let firstName1=new String("Ravindran");
let userName1=new String("Ravindran");

//String methods- for manipulation

//Escape sequence
let tesType='It\'s a regression testing';
console.log(tesType);
let stringType="Hello,this is a\"double quote\"";
console.log(stringType);

//concatenation--concat()
let testCaseName="create a new lead";
let testCaseId="123";
let result=testCaseId.concat(testCaseName);
console.log(result);
let testCaseId1=123;
let result1=testCaseId1.toString().concat(testCaseName);//for number, convert to string use toString
console.log(result1);

//+
let result2=testCaseId1+" - "+testCaseName+" passed in the last execution";
console.log(result2);

//template literal = `${}`
let testcases = 200;
let output=`There are ${testcases} testcases`;
console.log(output);

//length
let courseName="Playwright";
console.log(`length of the string is ${courseName.length}`);

//charAt
console.log(`length of the string is ${courseName.charAt(2)}`);

//indexof
console.log(`length of the string is ${courseName.indexOf('a')}`);

//split
let companyName="Qeagle Assurance Company";
let splitCompanyNameAsArray=companyName.split("");
console.log(splitCompanyNameAsArray);

//slice
console.log(courseName.slice(2,4));
console.log(courseName.slice(-4,-2));
console.log(courseName.slice(-6));
//start index included and end index not included also optional
//negative index is allowed, the count starts from -1

//substring
console.log(courseName.substring(3,5));
console.log(courseName.substring(5,3));
console.log(courseName.substring(5,-3));
/*start index included and end index not included also optional
 does not accept Negative value instead it treats as '0'
 Swapping can be done between the index*/


