//Use let to make variables private and then allow access to them
let Employee = function(id, name, age) {
    let localid = id;
    let localname = name;
    let localage = age;
    this.getId = function() {
        return localid;
    }
    this.getName = function() {
        return localname;
    }
    this.getAge = function() {
        return localage;
    }
    this.toString = function() {
        return getId() + " " + getName() + " " + getAge();
    }
};

let Manager = function(id, name, age, proj) {
    Employee.call(this, id, name, age);
    this.proj = proj;
    Manager.prototype.toString = function() {
        return Employee.prototype.toString.call(this) + " " + proj;
    };
}

Manager.prototype = Object.create(Employee.prototype);

let mgr = new Manager(2, "alpha", 33, "xyz");
console.log(mgr.toString());