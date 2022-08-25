const database = require("typeorm");
const cartDao = require("../models/cartDao");

const createCarts = async (userId, productId, quantity) => {
  const [checkCart] = await cartDao.existCart(userId, productId);

  if (Number(Object.values(checkCart)) === 1) {
    return await cartDao.plusQuantity(userId, productId);
  }

  return await cartDao.createCarts(userId, productId, quantity);
};

module.exports = {
  createCarts,
};
