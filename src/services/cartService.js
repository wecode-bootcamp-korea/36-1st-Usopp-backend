const database = require("typeorm");
const cartDao = require("../models/cartDao");

const createCarts = async (userId, productId, quantity) => {
  const isExists = await cartDao.existCart(userId, productId);

  if (isExists) return await cartDao.plusQuantity(userId, productId);

  return await cartDao.createCarts(userId, productId, quantity);
};

const readCarts = async (userId) => {
  return await cartDao.readCarts(userId);
};

const editCarts = async (userId, productId, quantity) => {
  const editCart = await cartDao.editCart(userId, productId, quantity);

  if (quantity <= 0 || quantity > 5) {
    const err = new Error("INVALID_QUANTITY");
    err.statusCode = 400;
    throw err;
  }
  return editCart;
};

module.exports = {
  createCarts,
  readCarts,
  editCarts
};
