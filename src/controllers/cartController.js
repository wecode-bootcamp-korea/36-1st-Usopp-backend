const cartService = require("../services/cartService");

const createCarts = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user;

  if (!productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  
  await cartService.createCarts(userId.sub, productId, quantity);

  res.status(201).json({ message: "NEW_CART_CREATED!" });
};

const readCarts = async (req, res) => {
  const userId = req.user;

  const cart = await cartService.readCarts(userId.sub);

  res.status(200).json(cart);
};

const editCarts = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    await cartService.editCart(userId, productId, quantity);

    res.status(201).json({ message: "QUANTITY CHANGED!" });

  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  createCarts,
  readCarts,
  editCarts,
};
