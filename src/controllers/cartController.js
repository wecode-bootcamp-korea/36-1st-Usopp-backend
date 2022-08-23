const cartService = require("../services/cartService");

const cart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await cartService.cart(userId, productId, quantity);

    res.status(201).json({ message: "NEW CART CREATED!" });

  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  cart,
};
