const express = require('express');
const Product = require('../database/models/product');
const controller = require('../controllers/product.controler')(Product);
const multerSetup = require('../middleware/multer');
const cloudinary = require('cloudinary');

const router = express.Router();

const productRouter = () => {
  // destructure controller to pull out functions
  const { addProduct, productDetail, updateProduct, deleteProduct } = controller;
  const { multerInit } = multerSetup;

  router.route('/')
    .get((req, res) => {
      res.json({ res: "product url" });
    })

    .post(multerInit.single('image'), addProduct)

  router.route('/:productName')
    .get(productDetail)

  router.route('/updateproduct/:id')
    .put(updateProduct)
    .delete(deleteProduct);

  return router;
};

module.exports = productRouter;
