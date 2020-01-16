const express = require('express');
const Discount = require('../database/models/discount');
const controller = require('../controllers/discount.controller')(Discount);

const router = express.Router();

const discountRouter = () => {
  // destructure controller to pull out functions
  const {discount,retrieveDiscount,deleteCoupon} = controller;

  router.route('/')
  .get((req,res) => {
    res.json({res: "discount url"});
  })
    .post(discount);

    router.route('/coupon/:id')
      .delete(deleteCoupon)
      .post(retrieveDiscount)
   return router;
};

module.exports = discountRouter;
