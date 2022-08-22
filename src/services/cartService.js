const database = require("typeorm");
const cartDao = require("../models/cartDao");

const cart = async (userId, productId, quantity) => {
  const cart = await cartDao.cart(userId, productId, quantity);
  return cart;
};

const readCart = async (productId, size, quantity, price, userId) => {
  const readCart = await cartDao.readCart(productId, size, quantity, price, userId);
  return readCart;
};

const editCart = async (userId, productId, quantity) => {
  const editCart = await cartDao.editCart(userId, productId, quantity);

  if (quantity <= 0 || quantity > 5) {
    const err = new Error("INVALID_QUANTITY");
    err.statusCode = 400;
    throw err;
  }
  return editCart;
};

const deleteCart = async (cartId) => {
  const deleteCart = await cartDao.deleteCart(cartId);
  return deleteCart;
};

module.exports = {
  cart,
  readCart,
  editCart,
  deleteCart,
};
