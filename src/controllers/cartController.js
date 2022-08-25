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

const readCart = async (req, res) => {
  try {
    const { productId, size, quantity, price, userId } = req.body;

    const cart = await cartService.readCart(productId, size, quantity, price, userId);

    res.status(200).json(cart);

  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  readCart,
  createCarts,
};
