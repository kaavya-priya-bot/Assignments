enum Environment{
    Process1=`LOCAL`,
    Process2=`DEVELOPMENT`,
    Process3=`STAGING`,
    Process4=`PRODUCTION`
}
function runTests(testName:string,env:Environment):void{
   console.log(``);

}
runTests(`Login Test`,Environment.Process1);