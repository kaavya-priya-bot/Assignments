//asynchronous callback funtion to fetch browser version
let browser = "firefox";
function checkBrowserVersion(callback) {
    setTimeout(() => {
        console.log(`Browser invoked is ${browser}`);
        callback(browser);
    }, 2000);
}
function fetchBrowserVersion(browserType){
    if(browserType.toLowerCase()==="chrome"){
        console.log(`the version of invoked browser ${browserType} is Version 138.0.7204.169`);
    }
    else if(browserType.toLowerCase()==="firefox"){
        console.log(`the version of invoked browser ${browserType} is Version 141.0 (64-bit)`);
    }
    else{
        console.log("Invalid Browser");
    }
}
checkBrowserVersion(fetchBrowserVersion);