'use strict';
//Helps to ensure that hoisting of variables 
var myFunc = function() {
    var age = 25;
    console.log("Hello");
    return {
        age: age
    }
}
myFunc();
console.log(new myFunc().age);