for (let i = 0; i < 10; i++) {}
//console.log(i)
//to get block scoping, use let

let lineItem = {
    product: "widget 1",
    quantity: 4,
    price: 9.5
};

for (let field in lineItem)
    console.log(lineItem[field]);
//prints value of the field, evrey property can be considered as array elment 
//literal style:name value pair