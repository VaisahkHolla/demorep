var hireEmployee = function myHireEmployeeFn(name) {
    throw ("Error");
};
//points to throw as Error
var action = hireEmployee;
//this is a function pointer

action("jj");