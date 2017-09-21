let Calculator = function(total) {
    this.total = total;
    this.add = function(val) {
        total += val;
    };
    this.subtract = function(val) {
        total -= val;
    };
    this.multiply = function(val) {
        total *= val;
    };
    this.getTotal = function() {
        return total;
    }
}
let ScientificCalculator = function(newTotal) {
    Calculator.call(this, newTotal);
    this.sin = function(val) {
        return Math.sin(val);
    }
}
ScientificCalculator.prototype = Object.create(Calculator);
// Bridge Between Calculator and ScientificCalculator
let calc = new ScientificCalculator(10)
calc.add(56);
calc.subtract(46);
calc.multiply(1256);
console.log(calc.getTotal());
console.log(calc.sin(45));