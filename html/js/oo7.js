let Calculator = {
    total: 0,
    add: function(val) {
        this.total += val;
    },
    subtract: function(val) {
        this.total -= val;
    },
    multiply: function(val) {
        this.total *= val;
    },
    getTotal: function() {
        return this.total;
    }

}

let Calculator1 = Object.create(Calculator);
let Calculator2 = Object.create(Calculator);
//both objects are using the same prototype so change in prototype will be reflected in other object too
//the callstack is different for each of them giving different results

Calculator1.add(56);
Calculator1.subtract(46);
Calculator1.multiply(256);
console.log(Calculator1.getTotal());
Calculator1.__proto__.doSomething = function() {
    return "Hello";
}



Calculator2.add(10);
Calculator2.subtract(5);
Calculator2.multiply(10);
console.log(Calculator2.getTotal());

console.log(Calculator1.__proto__ === Calculator2.__proto__)
console.log(Calculator2.doSomething());