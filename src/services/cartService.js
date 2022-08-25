const database = require("typeorm");
const cartDao = require("../models/cartDao");

const createCarts = async (userId, productId, quantity) => {
  const isExists = await cartDao.existCart(userId, productId);

  if (isExists) return await cartDao.plusQuantity(userId, productId);

  return await cartDao.createCarts(userId, productId, quantity);
};

const readCart = async (productId, size, quantity, price, userId) => {
  const readCart = await cartDao.readCart(productId, size, quantity, price, userId);
  return readCart;
};

module.exports = {
  readCart,
  createCarts,
};
