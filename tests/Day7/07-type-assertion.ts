//Using angular brackets

let reponse :any = "Record created successfully"

let myReponse = <string> reponse // your getting the value from external source can be a server ot a data file

console.log(myReponse.length);
console.log(typeof reponse);

//Using as keyword

let sCode : any = "Success"

let statusLength = sCode as string;

console.log(statusLength.length);