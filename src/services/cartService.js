const database = require("typeorm");
const cartDao = require("../models/cartDao");

const createCarts = async (userId, productId, quantity) => {
  const isExists = await cartDao.existCart(userId, productId);

  if (isExists) return await cartDao.plusQuantity(userId, productId);

  return await cartDao.createCarts(userId, productId, quantity);
};

module.exports = {
  createCarts,
};
