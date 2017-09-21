function A() {}
//function constructor
//this uses prototype
A.prototype.doSomething = function() {
        return "Hello";
    }
    //function constructor
let B = {}
    //literal style
    //this uses __proto__ 
console.log(A.prototype);
console.log(B.__proto__);
let a = new A();
console.log(a.doSomething());
//To bridge B and A, use the foll

B.__proto__ = Object.create(A.prototype);
A.prototype = Object.create(B.__proto__);
console.log("Here");
console.log(B.__proto__);
console.log("Here1");
console.log(A.prototype);

A.prototype.doNothing = function() {
    return "Nothing";
}
console.log(A.prototype);
console.log(B.__proto__);
/*
console.log(B.doSomething())
console.log(B.doNothing())*/