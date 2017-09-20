var myFunc = function(a) {
    return function(b) {
        return a + b;
    }
}
var innerFunc = myFunc(10);
console.log(innerFunc(20));
//the above provides a pointer referencing the function
console.log(myFunc(3)(20));
//both are same... closures are used so as to retain the local variable information
//pipeing so that value is sent to the inside i.e.function(b)

//This is utilizing functional programming