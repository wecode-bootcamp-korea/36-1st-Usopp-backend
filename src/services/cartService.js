const database = require("typeorm");
const cartDao = require("../models/cartDao");

const deleteCart = async (cartId) => {
  const deleteCart = await cartDao.deleteCart(cartId);
  return deleteCart;
};

module.exports = {
  deleteCart,
};
