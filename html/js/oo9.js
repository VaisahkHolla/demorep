let Singleton = (function() {

    let Employee = function() {

    }
    let instance;
    let getInstance = function() {
        return instance = instance || new Employee();
    }
    return {
        Employee: Employee,
        getInstance: getInstance
    }
    //getInstance is never bound to employee so we should use it directly
})();
//new Employee();
//This can't be done as we are using immediately invoked function to ensure that employee is only available through singleton
let emp1 = Singleton.getInstance();
let emp2 = Singleton.getInstance();
console.log(emp1 === emp2)
console.log(emp1 instanceof Singleton.Employee);