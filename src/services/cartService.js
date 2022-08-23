const database = require("typeorm");
const cartDao = require("../models/cartDao");

const readCart = async (productId, size, quantity, price, userId) => {
  const readCart = await cartDao.readCart(productId, size, quantity, price, userId);
  return readCart;
};

module.exports = {
  readCart,
};
