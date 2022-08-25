const cartService = require("../services/cartService");
const BaseError = require("../middlewares/baseError");

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

const editCarts = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user;

  await cartService.editCarts(userId.sub, productId, quantity);

  res.status(201).json({ message: "CART_EDITED!" });
};

const deleteCarts = async (req, res) => {
  const { cartId } = req.body;

  await cartService.deleteCarts(cartId);

  res.status(201).json({ message: "CART_DELETED!" });
};

module.exports = {
  createCarts,
  readCarts,
  editCarts,
  deleteCarts,
};