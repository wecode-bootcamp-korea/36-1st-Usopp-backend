const cartService = require("../services/cartService");

const readCart = async (req, res) => {
  try {
    const { productId, size, quantity, price, userId } = req.body;

    const cart = await cartService.readCart(productId, size, quantity, price, userId);

    res.status(200).json(cart);

  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  readCart,
};
