const express = require('express');
const Category = require('../database/models/productCategory');
const Product = require('../database/models/product');
const controller = require('../controllers/productCategory.controller')(Category, Product);
const multerSetup = require('../middleware/multer');
const cloudinary = require('cloudinary');

const router = express.Router();

const productCategoryRouter = () => {
    const { addCategory, updateCategory, deleteCategory, findCategory } = controller;
    const { multerInit } = multerSetup;
    router.route('/')
        .get((req, res) => {
            res.json({ res: "Category url" })
        })
        .post(multerInit.single('image'), addCategory)
        
    router.route('/:categoryName')
        .get(findCategory)

    router.route('/updatecategory/:id')
        .put(updateCategory)
        .delete(deleteCategory);

    return router;

}
module.exports = productCategoryRouter;