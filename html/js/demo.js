//employee id,name and age->private toString returns id,age,name
//manager to employee project to manager

let Employee = function(id, name, age) {
    let lid = id;
    let lname = name;
    let lage = age;
    Employee.prototype.toString = function() {
        return (lid + " " + lname + " " + lage);
    };
    /* return {
         toString: toString
     }*/
}

//let emp = new Employee(1, "jj", 25);
//console.log(emp.toString());

let Manager = function(id, name, age, proj) {
    Employee.call(this, id, name, age);
    this.proj = proj;
    Manager.prototype.toString = function() {
        return Employee.prototype.toString.call(this) + " " + proj;
    };
}

Manager.prototype = Object.create(Employee.prototype);

let mgr = new Manager(2, "alpha", 33, "xyz");
console.log(mgr.lid);
console.log(mgr.toString());
console.log(mgr)
    //console.log(mgr.mgrtoString());