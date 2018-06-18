var global_number = 20;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.numberval = 30;
    }
    Numbers.prototype.storeNumber = function () {
        var local_num = 50;
        console.log("local number:  ", local_num);
    };
    Numbers.sval = 40;
    return Numbers;
}());
console.log("Global Number:  ", global_number);
console.log("Static Number :  ", Numbers.sval);
var number = new Numbers();
console.log("Default number:  ", number.numberval);
number.storeNumber();
