const productService = require("../services/productService");

const productRouter = async (req, res) => {
    const Main = await productService.productRouter();
    res.status(200).json(Main);
};

const productCategoryRouter = async (req, res) => {
    const categoryStr = req.params.categoryStr;
    const category = await productService.productCategoryRouter(categoryStr);
    res.status(200).json(category);
    console.log(category)
};

const productAromaRouter = async (req, res) => {
    const aromasId  = req.params.aromasId;
    const aromas = await productService.productAromaRouter(aromasId);
    res.status(200).json(aromas);es.status(err.statusCode || 500).json({ message: err.message });
};

const productDetailRouter = async (req, res) => {
    const {productId}= req.params;
    const productDetail = await productService.productDetailRouter(productId);
    res.status(200).json(productDetail);
};

module.exports = {
  productRouter,
  productCategoryRouter,
  productAromaRouter,
  productDetailRouter
};