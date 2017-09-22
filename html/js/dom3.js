/*this.employee = {
    id: 1,
    name: 'nm',
    age: 23
}
this.employee.__proto__.toString = function() {
    return this.id + " " + this.name + " " + this.age;
}*/
console.log(this);
setTimeout(function() {
    console.log(this);
}, 100)