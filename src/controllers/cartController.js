const BaseError = require("../middlewares/baseError");
const cartService = require("../services/cartService");

const readCarts = async (req, res) => {
  const userId = req.user;
  const cart = await cartService.readCarts(userId.sub);
  res.status(200).json(cart);
};

module.exports = {
  readCarts
};
