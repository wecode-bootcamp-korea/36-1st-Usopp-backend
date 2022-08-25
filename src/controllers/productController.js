const productService = require("../services/productService");
const BaseError = require("../middlewares/baseError");

const productAllList = async (req, res) => {
    const product = await productService.productAllList();
    res.status(200).json(product);
};

const productCategoryList = async (req, res) => {
    const {categoryId} = req.params;
    const category = await productService.productCategoryList(categoryId);
    res.status(200).json(category);
};

const productAromaList = async (req, res) => {
    const aromasId  = req.params.aromasId;
    const aromas = await productService.productAromaList(aromasId);
    res.status(200).json(aromas);es.status(err.statusCode || 500).json({ message: err.message });
};

const productDetailPage = async (req, res) => {
    const {productId}= req.params;
    const productDetail = await productService.productDetailPage(productId);
    res.status(200).json(productDetail);
};

module.exports = {
  productAllList,
  productCategoryList,
  productAromaList,
  productDetailPage
};