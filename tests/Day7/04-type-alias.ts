


//Union type


let username: number | string;


username = "ravi@testleaf.com";
username = 99898989;


type productDatatype = number | string | boolean; // productDatatype is a variable name that can hold all three types of data type


let accountNumber: productDatatype = "tyyuiu123412";
accountNumber = 123412312;
accountNumber = false;


type supportedBrowsers = "Chrome" | "Firefox";// type alias here


function invokeBrowsers(browserName: supportedBrowsers) {//Explicit infernce 
    if (browserName === "Chrome") {
        console.log("Launch Chrome Browser");


    } else {
        console.log("Firefox Browser");
    }
}


invokeBrowsers("Chrome")
//invokeBrowsers("Firefox")


//Intersection type -& - mandatorily use all the values that are declared within the types infered


type Admin = {
    adminName: string,
    privileges: string[]
}


type Employee = {
    name: string,
    empId: number,
    date: string
}


type QA = Admin & Employee


const userProfileQA: QA = {
    adminName: "Testleaf",
    privileges: ['server'],
    name: "Ravindran",
    empId: 1001,
    date: "09/Aug./2025"


}


console.log(userProfileQA.adminName); // Testleaf
console.log(userProfileQA.privileges);//[ 'server' ]




