var project = new Object();
project.name = 'project phoenix';
project.securitylvl = 15;
project.updateDueDate = function() {
    return true;
};
console.log(project.name);
//can create an object first and then add properties to it even after creating it
console.log(project.updateDueDate());
console.log(project['securitylvl']);
//named index
//objects can be created using var x=new Object() or using var x={properties here}
var x = {
    name: 'xyz',
    id: 12
};
x.asdf = function() {
    return true;
}
console.log(x.asdf())