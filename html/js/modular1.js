const Manager = require('./modular').Manager;
const Employee = require('./modular').Employee;

let mgr = new Manager(1, "abc", "xyz");
console.log(mgr);

let emp = new Employee(1, "emp");
console.log(emp);