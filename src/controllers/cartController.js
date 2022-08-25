const BaseError = require("../middlewares/baseError");
const cartService = require("../services/cartService");
const baseError = require("../middlewares/baseError");

const deleteCarts = async (req, res) => {
  const { cartId } = req.body;

  await cartService.deleteCarts(cartId);

  res.status(201).json({ message: "CART_DELETED!" });
};

module.exports = {
  deleteCarts,
};