const cartDao = require("../models/cartDao");
const BaseError = require("../middlewares/baseError");

const deleteCarts = async (cartId) => await cartDao.deleteCarts(cartId);

module.exports = {
  deleteCarts,
};