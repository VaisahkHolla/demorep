//Calculator.add(56);
//objects aren't hoisted
let Calculator = {
        total: 0,
        //without using this, we can't access total inside the function as its limited to calculator fn
        add: function(val) {
            this.total += val;
        },
        sub: function(val) {
            this.total -= val;
        },
        mul: function(val) {
            this.total *= val;
        },
        getTotal: function() {
            return this.total;
        }
    }
    //run with this and without this keyword
    //literal style where value can be defined directly

Calculator.add(56);
Calculator.sub(20);
Calculator.mul(2);
console.log(Calculator.getTotal());