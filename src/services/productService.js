const productDao = require("../models/productDao");

const productRouter = async () => {
  const productRouter = await productDao.productRouter();
  for (const productMain of productRouter) {
    productMain.product = JSON.parse(productMain.product)
    productMain.setProduct = JSON.parse(productMain.setProduct);
  }
  return productRouter;
};

const productCategoryRouter = async (categoryStr) => {
  const productCategories = await productDao.productCategoryRouter(categoryStr);
  for (const productCategory of productCategories) {
    productCategory.product = JSON.parse(productCategory.product)
    productCategory.setProduct = JSON.parse(productCategory.setProduct);
  }
  return productCategories;
};

const productAromaRouter = async (aromasId) => {
  const productAromaRouter = await productDao.productAromaRouter(aromasId);
  for (const productAroma of productAromaRouter) {
    productAroma.product = JSON.parse(productAroma.product)
  }
  return productAromaRouter;
};

const productDetailRouter = async (productId) => {
  const productDetail = await productDao.productDetailRouter(productId);
  for (const productAroma of productDetail) {
    productAroma.aromas = JSON.parse(productAroma.aromas)
  }
  return productDetail;
};

module.exports = {
  productRouter,
  productCategoryRouter,
  productAromaRouter,
  productDetailRouter
};