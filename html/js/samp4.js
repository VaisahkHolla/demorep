let inst = null;

class single {
    constructor() {
        if (!inst)
            inst = this;
        return inst;
    }
}

let x = new single();
let y = new single();
console.log(x === y);