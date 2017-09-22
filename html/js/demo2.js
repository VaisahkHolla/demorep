let HashMap = require('weakmap');
const privateProps = new HashMap();
const privateProps1 = new HashMap();
class Employee {
    constructor(id, name, age) {
        privateProps.set(this, {
            id: id,
            name: name,
            age: age
        });
    }
    get id() {
        return privateProps.get(this).id;
    }
    get name() {
        return privateProps.get(this).name;
    }
    get age() {
        return privateProps.get(this).age;
    }
    toString() {
        return this.id + " " + this.name + " " + this.age;
    }
}
class Manager extends Employee {
    constructor(id, name, age, project) {
        super(id, name, age)
        privateProps1.set(this, {
            project: project
        });
    }
    get project() {
        return privateProps1.get(this).project;
    }
    toString() {
        return super.toString() + " " + this.project;
    }
}

let m = new Manager(1, "M2", 55, "Project1");
console.log("Manager " + m);
console.log(m.id);