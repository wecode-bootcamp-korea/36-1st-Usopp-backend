const database = require("typeorm");
const BaseError = require("../middlewares/baseError");
const cartDao = require("../models/cartDao");

const createCarts = async (userId, productId, quantity) => {
  const isExists = await cartDao.existCart(userId, productId);

  if (isExists) return await cartDao.plusQuantity(userId, productId);

  return await cartDao.createCarts(userId, productId, quantity);
};

const readCarts = async (userId) => await cartDao.readCarts(userId);

const editCarts = async (userId, productId, quantity) => {
  const editCarts = await cartDao.editCarts(userId, productId, quantity);

  if (quantity <= 0 || quantity > 5) throw new BaseError("INVALID_QUANTITY", 400);
  
  return editCarts;
};

const deleteCarts = async (cartId) => await cartDao.deleteCarts(cartId);

module.exports = {
  createCarts,
  readCarts,
  editCarts,
  deleteCarts,
};