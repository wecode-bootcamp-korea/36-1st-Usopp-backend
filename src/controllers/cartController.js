const BaseError = require("../middlewares/baseError");
const cartService = require("../services/cartService");

const editCarts = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user;

  await cartService.editCarts(userId.sub, productId, quantity);

  res.status(201).json({ message: "CART_EDITED!" });
};

module.exports = {
  editCarts,
};