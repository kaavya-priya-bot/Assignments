var TestResult;
(function (TestResult) {
    TestResult[TestResult["Pass"] = 1] = "Pass";
    TestResult[TestResult["Fail"] = 2] = "Fail";
    TestResult[TestResult["Skip"] = 3] = "Skip";
})(TestResult || (TestResult = {}));
function logTestResult(testName, result) {
    console.log("Test: ".concat(testName), "Result Code:".concat(result));
}
//enumName.member
logTestResult("Login Page", TestResult.Pass);
//String enum
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Edge"] = "edge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserType) {
    console.log("Launch browser using ".concat(browserType));
}
launchBrowser(BrowserType.Chrome);
//hetergenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 0] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["Close"] = 2] = "Close";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    // return `Current browser status is ${status}`
    console.log("Current browser status is ".concat(status));
}
reportBrowserStatus(BrowserStatus.Open);
reportBrowserStatus(BrowserStatus.Crash);
