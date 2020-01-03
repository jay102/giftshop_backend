const express = require('express');
const Discount = require('../database/models/discount');
const controller = require('../controllers/discount.controller')(Discount);

const router = express.Router();

const discountRouter = () => {
  // destructure controller to pull out functions
  const {discount} = controller;

  router.route('/')
  .get((req,res) => {
    res.json({res: "order url"});
  })
    .post(discount);

  return router;
};

module.exports = discountRouter;
