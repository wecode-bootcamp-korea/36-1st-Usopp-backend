const database = require("typeorm");
const cartDao = require("../models/cartDao");
const BaseError = require("../middlewares/baseError");

const editCarts = async (userId, productId, quantity) => {
  const editCart = await cartDao.editCarts(userId, productId, quantity);

  if (quantity <= 0 || quantity > 5) throw new BaseError("INVALID_QUANTITY", 400);

  return editCart;
};

module.exports = {
  editCarts,
};
