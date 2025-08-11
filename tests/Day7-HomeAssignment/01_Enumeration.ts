/*Enum named `Environment` with four values representing different stages of a 
software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`, 
`PRODUCTION` */
enum Environment {
    LOCAL = "Local",
    DEVELOPMENT = "Development",
    STAGING = "Staging",
    PRODUCTION = "Production"
}
/*function named `runTests` that accepts an argument of type `Environment`. The 
function should print a message indicating the environment against which the tests are 
running */
// The function `runTests` should be specified to return `void`
function runTests(testName: string, env: Environment): void {
    console.log(`Running ${testName} against the ${env} environment...`);

}
runTests(`Login Test`, Environment.LOCAL);
runTests(`Login Test`, Environment.DEVELOPMENT);
runTests(`Login Test`, Environment.STAGING);
runTests(`Login Test`, Environment.PRODUCTION);