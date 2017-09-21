class Calculator {
    constructor(total) {
        this.total = total;
    }
    add(val) {
        this.total += val;
    };
    sub(val) {
        this.total -= val;
    };
    mul(val) {
        this.total *= val;
    };
    getTotal() {
        return this.total;
    };
}

class ScCal extends Calculator {
    constructor(total) {
        super(total);
    }
    sin(val) {
        return Math.sin(val);
    }
}
//We're not supposed to use function keyword for fn declaration inside a class
//this keyword binds the functions to the object instance created using new keyword
//class is available only from ES2015/ES6
//Trasnpilers can help convert this to be compatible with lower versions

let calc = new Calculator(0);
let calc1 = new ScCal(0);
calc.add(56);
calc.sub(20);
calc.mul(2);
console.log(calc.getTotal());
calc1.add(56);
calc1.sub(20);
calc1.mul(2);
console.log(calc1.getTotal());
console.log(calc1.sin(1));
console.log(typeof Calculator);
//gives as function as it is ultimately a function