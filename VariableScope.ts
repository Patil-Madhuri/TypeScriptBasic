var global_number = 20             //global variable
class Numbers{
    numberval = 30;              //class variable 
    static sval = 40;               //static variable 

    storeNumber() : void{
        var local_num = 50;     //local variable 
        console.log("local number:  ",local_num);
        
    }
}

console.log("Global Number:  ",global_number);
console.log("Static Number :  ",Numbers.sval);
var number = new Numbers();
console.log("Default number:  ",number.numberval);
number.storeNumber();


