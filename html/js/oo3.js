let Calculator = function(total) {
    this.total = total;
    //Similar to encapsulation
    //this will bind the obj and variable
    let add = function(val) {
        total += val;
        //if this is used, it'll make sure that the variable is created again and bound to the function
        //binding context
    };
    let sub = function(val) {
        total -= val;
    };
    let mul = function(val) {
        total *= val;
    };
    let getTotal = function() {
        return total;
    };
    return {
        add: add,
        sub: sub,
        mul: mul,
        getTotal: getTotal
    }
    //using closure to expose the add,sub etc funtions that are available only inside the calculator object
    //expose private member as public interface
    //module revealing LHS can be any name referring to the fn inside the object/class

}

let calc = new Calculator(0);
//to access the functions, new must be used here and any other way is not possible
calc.add(56);
calc.sub(20);
calc.mul(2);
console.log(calc.getTotal());