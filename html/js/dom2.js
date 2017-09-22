this.employee = {
    id: 1,
    name: 'nm',
    age: 23
}
this.employee.__proto__.toString = function() {
    return this.id + " " + this.name + " " + this.age;
}
var self = this;
//this reference is lost when it goes inside the timeout fn so self is used here to store that references
//whenever asynchronous fn is used, the refernce is lost i.e callstack has different binding and context changes after exe of statments
setTimeout(function() {
    console.log("Detail " + self.employee.toString());
}, 100)