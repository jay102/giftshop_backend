const express = require('express');
const Order = require('../database/models/order');
const controller = require('../controllers/order.controller')(Order);

const router = express.Router();

const orderRouter = () => {
  // destructure controller to pull out functions
  const {order} = controller;

  router.route('/')
  .get((req,res) => {
    res.json({res: "order url"});
  })
    .post(order);

  return router;
};

module.exports = orderRouter;
