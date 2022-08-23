const cartDao = require("../models/cartDao");

const createCarts = async (userId, productId, quantity) => await cartDao.createCarts(userId, productId, quantity);

module.exports = {
  createCarts,
};