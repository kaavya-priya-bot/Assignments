
enum TestResult {
    Pass=1,
    Fail,
    Skip
}

function logTestResult(testName:string,result:TestResult) {

 console.log(`Test: ${testName}`, `Result Code:${result}`);
    
}
//enumName.member
logTestResult("Login Page", TestResult.Pass)


//String enum

enum BrowserType{

    Chrome="chrome",
    Firefox="firefox",
    Edge="edge"
}

function launchBrowser(browserType: BrowserType){

    console.log(`Launch browser using ${browserType}`);   

}
launchBrowser(BrowserType.Chrome)


//hetergenous enum

enum BrowserStatus {

    Open,
    Incognito,
    Crash="crashed",
    Close=2
}

function reportBrowserStatus(status:BrowserStatus):void {

   // return `Current browser status is ${status}`
   console.log(`Current browser status is ${status}`);   
    
}

reportBrowserStatus(BrowserStatus.Open)
reportBrowserStatus(BrowserStatus.Crash)