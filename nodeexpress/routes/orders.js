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
        //passed as object 
    })
})

//Function chaining .route().get().post. and so on
//Http://IP:PORT/api/orders/1
router.route("/orders/:id").put(function(req, res) {
    Order.findByIdAndUpdate({ _id: req.params.id }, req.body,
        function(err) {
            if (err)
                res.send(err);
            res.send({ message: 'Order Updated' })
        })
}).get(function(req, res) {
    Order.findOne({ _id: req.params.id }, function(err, orders) {
        if (err)
            res.send(err);
        res.json(orders);
    })
}).delete(function(req, res) {
    Order.remove({ _id: req.params.id }, function(err, orders) {
        if (err)
            res.send(err);
        res.json(orders);
    })
})



module.exports = router;