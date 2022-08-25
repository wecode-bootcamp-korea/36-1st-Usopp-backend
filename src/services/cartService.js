const database = require("typeorm");
const cartDao = require("../models/cartDao");
const BaseError = require("../middlewares/baseError");

const createCarts = async (userId, productId, quantity) => {
  const isExists = await cartDao.existCarts(userId, productId);

  if (isExists) return await cartDao.plusQuantity(userId, productId);

  return await cartDao.createCarts(userId, productId, quantity);
};

const readCarts = async (userId) => {
  return await cartDao.readCarts(userId);
};

const editCarts = async (userId, productId, quantity) => {
  const editCart = await cartDao.editCarts(userId, productId, quantity);

  if (quantity <= 0 || quantity > 5) throw new BaseError("INVALID_QUANTITY", 400);

  return editCart;
};

module.exports = {
  createCarts,
  readCarts,
  editCarts
};
