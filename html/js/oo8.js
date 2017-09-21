let Employee = function() {}
    //function declartion uses the Function hence returns false if the below code is used
console.log(Employee.__proto__ === Object.prototype)

let Emp = {}
    //literal declaration inherits OBject class and not function class hence the equlity arises
console.log(Emp.__proto__ === Object.prototype)