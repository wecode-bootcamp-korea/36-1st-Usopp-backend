const database = require("typeorm");
const cartDao = require("../models/cartDao");

const editCart = async (userId, productId, quantity) => {
  const editCart = await cartDao.editCart(userId, productId, quantity);

  if (quantity <= 0 || quantity > 5) {
    const err = new Error("INVALID_QUANTITY");
    err.statusCode = 400;
    throw err;
  }
  return editCart;
};

module.exports = {
  editCart,
};
