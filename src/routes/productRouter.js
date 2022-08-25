const express = require('express');
const productController = require('../controllers/productController');
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.get("/", errorHandler(productController.productRouter));
router.get("/aroma/:aromasId", errorHandler(productController.productAromaRouter));
router.get("/:categoryStr", errorHandler(productController.productCategoryRouter));
router.get("/detail/:productId", errorHandler(productController.productDetailRouter));

module.exports = {
    router
}; 