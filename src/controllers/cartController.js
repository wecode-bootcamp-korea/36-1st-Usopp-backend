const cartService = require("../services/cartService");

const editCart = async (req, res) => {
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
  editCart,
};
