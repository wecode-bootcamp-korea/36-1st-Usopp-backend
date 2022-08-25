const productDao = require("../models/productDao");

const productAllList = async () => {
  const productAllList = await productDao.productAllList();
  for (const productMain of productAllList) {
    productMain.product = JSON.parse(productMain.product)
    productMain.setProduct = JSON.parse(productMain.setProduct);
  }
  return productAllList;
};

const productCategoryList = async (categoryId) => {
  const productCategoryList = await productDao.productCategoryList(categoryId);
  for (const productCategory of productCategoryList) {
    productCategory.product = JSON.parse(productCategory.product)
    productCategory.setProduct = JSON.parse(productCategory.setProduct);
  }
  return productCategoryList;
};

const productAromaList = async (aromasId) => {
  const productAromaList = await productDao.productAromaList(aromasId);
  for (const productAroma of productAromaList) {
    productAroma.product = JSON.parse(productAroma.product)
  }
  return productAromaList;
};

const productDetailPage = async (productId) => {
  const productDetailPage = await productDao.productDetailPage(productId);
  for (const productAroma of productDetailPage) {
    productAroma.aromas = JSON.parse(productAroma.aromas)
  }
  return productDetailPage;
};

module.exports = {
  productAllList,
  productCategoryList,
  productAromaList,
  productDetailPage
};