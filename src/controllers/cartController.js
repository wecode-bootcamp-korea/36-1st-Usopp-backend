const BaseError = require("../middlewares/baseError");
const cartService = require("../services/cartService");

const createCarts = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user;

  if (!productId) throw new BaseError("KEY_ERROR", 400);
  
  await cartService.createCarts(userId.sub, productId, quantity);

  res.status(201).json({ message: "NEW_CART_CREATED!" });
};

const readCarts = async (req, res) => {
  const userId = req.user;
  const cart = await cartService.readCarts(userId.sub);
  res.status(200).json(cart);
};

module.exports = {
  createCarts,
  readCarts,
};
