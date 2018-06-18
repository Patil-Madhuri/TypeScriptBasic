var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.greet = function () {
        console.log("Hello World !!!");
    };
    return Hello;
}());
var hello = new Hello();
hello.greet();
