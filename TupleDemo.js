var mytuple = [10, "Hello", "World", "typeScript"];
console.log("mytuple length before push " + mytuple.length); // returns the tuple size 
mytuple.push(12); // append value to the tuple 
console.log("mytuple length after push " + mytuple.length);
console.log("mytuple length before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("mytuple length after pop " + mytuple.length);
//update a tuple element 
console.log("Tuple value at index 0 " + mytuple[0]);
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
