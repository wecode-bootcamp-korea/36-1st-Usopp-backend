const cartService = require("../services/cartService");

const deleteCart = async (req, res) => {
  try {
    const { cartId } = req.body;

    await cartService.deleteCart(cartId);

    res.status(201).json({ message: "CART ITEM DELETED!" });
    
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  deleteCart,
};
