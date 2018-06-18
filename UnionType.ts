// Union type means ability to combine one or two types.
// Two or more data types are combined using the pipe symbol (|) to denote a Union Type


//Union type variable
var val: string | number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

//Union type function
// disp() can accept argument either of the type string or a string array.
function disp(name:string |string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else {   
       for(var i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 

 function display(number : number |string[]){
     if(typeof number == "number"){
         console.log(number);  
     }
     else{
        for(var i = 0;i<number.length;i++) { 
            console.log(number[i])
         } 
     }
 }
 disp("madhuri") 
 console.log("From disp method.................") 
 disp(["madhuri","ankita","rohini","shweta","poonam"])
 display(20);
 console.log("From display method..............");
 
 display(["madhuri","ankita","rohini","shweta","poonam"])