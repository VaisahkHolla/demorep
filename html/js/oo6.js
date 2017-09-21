function A() {}
//function constructor
//this uses prototype
A.prototype.doSomething = function() {
        return "Hello";
    }
    //function constructor
let B = {}
    //literal style name:value pair defn
    //this uses __proto__ 
console.log(A.prototype);
console.log(B.__proto__);
let a = new A();
console.log(a.doSomething());
//To bridge B and A, use the foll
let C = {};
C.__proto__ = Object.create(A.prototype);
C.__proto__ = Object.create(B.__proto__);
//A.prototype = Object.create(B.__proto__);
//The above command creates a circular link which is possible in code but not in reality as 
//employye can be inherited by manager as all mangaers are emp but not the other way around hence any new
//functionalities added to employye in a circular link won't be reflected in the child
console.log("Here");
console.log(B.__proto__);
console.log("Here1");
console.log(A.prototype);
console.log(C.__proto__);
A.prototype.doNothing = function() {
    return "Nothing";
}
console.log(A.prototype);
console.log(B.__proto__);

//console.log(B.doSomething())
//console.log(B.doNothing())