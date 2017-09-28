const Order = require('../model/order');
const express = require('express');
const router = express.Router();

//http://IP:PORT/orders any url ending with orders
router.route('/orders').get(function(req, res) {
    Order.find(function(err, orders) {
        if (err) {
            res.send(err)
        }
        res.json(orders);
    })
}).post(function(req, res) {
    let order = new Order(req.body);
    order.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Order is placed' });
    })
})

//Function chaining .route().get().post. and so on


module.exports = router;