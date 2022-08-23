const database = require("typeorm");
const cartDao = require("../models/cartDao");

const cart = async (userId, productId, quantity) => {
  const cart = await cartDao.cart(userId, productId, quantity);
  return cart;
};

module.exports = {
  cart,
};
