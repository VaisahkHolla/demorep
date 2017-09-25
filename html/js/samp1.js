let invoice = {
    num: 1234,
    process: function() {
        return () =>
            console.log(this.num);
    }
}

//process should be a normal function as arrow function creates a new scope to remember the context
//if process was an arrow fn then a new scope is created which won't have any binding context
invoice.process()()();