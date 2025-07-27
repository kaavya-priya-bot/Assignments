//JavaScript functions: `launchBrowser` with `if-else` for browser launch messages 

function launchBrowser(browserName){
    if(browserName==="chrome"){
        console.log("Launch Browser: "+browserName);
    }else if(browserName==="firefox"){
        console.log("Launch Browser: "+browserName);
    }
    else if(browserName==="edge"){
        console.log("Launch Browser: "+browserName);
    }else if(browserName==="webkit"){
        console.log("Launch Browser: "+browserName);
    }
    else{
        console.log("Invalid input");
    }
}

 
//JavaScript functions: `runTests` with `switch` for test type messages.
function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Type of the test run: "+testType);
            break;
        case "sanity":
            console.log("Type of the test run: "+testType);
            break;
        case "regression":
            console.log("Type of the test run: "+testType);
            break;
        default:
            console.log("Type of the test run: smoke");
    }
}
launchBrowser("edge");
runTests("sanity");