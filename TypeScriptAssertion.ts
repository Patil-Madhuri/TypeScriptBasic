var string1 : string = "1";
var string2 : number = <number><any>string1;
console.log(string2);

// Inferred Typing
var number : number =2;
console.log("value of number: ",number);
number : "12";
console.log("value of number: ",number);
