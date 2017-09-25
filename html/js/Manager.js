const Employee = require('./Employee');
class Manager extends Employee {
    constructor(id, name, project) {
        super(id, name)
        this.project = project
    }
    toString() {
        return super.toString() + " " + this.project;
    }
}

let mgr = new Manager(1, "abc", "xyz");
console.log(mgr);