const express = require('express');
const productController = require('../controllers/productController');
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.get("/main", errorHandler(productController.productAllList));
router.get("/main/aroma/:aromasId", errorHandler(productController.productAromaList));
router.get("/main/:categoryId", errorHandler(productController.productCategoryList));
router.get("/main/detail/:productId", errorHandler(productController.productDetailPage));

module.exports = {
    router
}; 
