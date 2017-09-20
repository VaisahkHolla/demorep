//const orderID = 1234;
//gets an erro assignment to constant variable this works with latest js Engine
var orderID = 1234;
//orderID = "ABCD";
orderID = new String("zy");
//prints object
orderID = {
    order: 9001,
    isActive: true
};
//prints object
orderID = null;
//prints object
orderID = ["1234", "asdf"];
//prints object
console.log(typeof orderID);

var processOrder = function() {}
    //prints function
console.log(typeof processOrder);
//npm -v node packet manager version
//node -v node version