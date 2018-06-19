interface Person{
    firstname : string,
    lastname : string,
    city : string,
    contact : number,
    hello : () => string
}

var customer : Person ={
     firstname : 'madhuri',
     lastname : 'patil',
     city : 'kamothe',
     contact : 9096278685,
     hello : ():string => {
         return "hi...."
     }
}
console.log("Firstname  : ",customer.firstname);
console.log("Lastname:  ",customer.lastname);
console.log("City: ",customer.city);
console.log("Contact:  ",customer.contact);
console.log(customer.hello());

