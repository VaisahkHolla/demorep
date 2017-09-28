const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let orderSchema = new Schema({
    id: 'String',
    name: 'String',
    price: 'Number'
})

module.exports = mongoose.model('Order', orderSchema);
//Decorator pattern To an object it attaches all those features