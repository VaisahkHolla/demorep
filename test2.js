'use strict';
//Helps to ensure that hoisting of variables 
myFunc();

var myFunc = function() {
    var age = 25;
    console.log("Hello");
    return {
        age: age
    }
}