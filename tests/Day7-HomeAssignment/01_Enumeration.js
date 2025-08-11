/*Enum named `Environment` with four values representing different stages of a
software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`,
`PRODUCTION` */
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "Local";
    Environment["DEVELOPMENT"] = "Development";
    Environment["STAGING"] = "Staging";
    Environment["PRODUCTION"] = "Production";
})(Environment || (Environment = {}));
/*function named `runTests` that accepts an argument of type `Environment`. The
function should print a message indicating the environment against which the tests are
running */
// The function `runTests` should be specified to return `void`
function runTests(testName, env) {
    console.log("Running ".concat(testName, " against the ").concat(env, " environment..."));
}
runTests("Login Test", Environment.LOCAL);
runTests("Login Test", Environment.DEVELOPMENT);
runTests("Login Test", Environment.STAGING);
runTests("Login Test", Environment.PRODUCTION);
