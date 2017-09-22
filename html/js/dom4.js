this.employee = {
    id: 1,
    name: 'nm',
    age: 23
}
this.employee.__proto__.toString = function() {
        return this.id + " " + this.name + " " + this.age;
    }
    //Arrow function available from es2015
    //Mainly used in asynchronous callbacks
    //retains the binding context and hence provides value of employee
setTimeout(() => {
    console.log("Detail " + this.employee);
}, 100)