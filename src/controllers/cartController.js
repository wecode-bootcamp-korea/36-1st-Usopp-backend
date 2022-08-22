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
  cart,
  readCart,
  editCart,
  deleteCart,
};
