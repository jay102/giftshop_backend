const express = require('express');
const Product = require('../database/models/product');
const controller = require('../controllers/product.controler')(Product);

const router = express.Router();

const productRouter = () => {
  // destructure controller to pull out functions
  const { product, productDetail} = controller;

  router.route('/')
  .get((req,res) => {
    res.json({res: "product url"});
  })
    .post(product);

  router.route('/productdetail/:id')
  .get((req,res)=>{
    res.send(req.params.id)
  })
    .post(productDetail);

  return router;
};

module.exports = productRouter;
