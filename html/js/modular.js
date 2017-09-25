class Employee {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return this.id + " " + this.name;
    }


}

class Manager extends Employee {

    constructor(id, name, project) {
        super(id, name)
        this.project = project;
    }

    toString() {
        return super.toString() + " " + this.project;
    }
}
module.exports = { Manager, Employee };