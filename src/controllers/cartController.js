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

module.exports = {
  createCarts,
};
