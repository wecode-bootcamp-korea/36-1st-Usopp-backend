const cartService = require("../services/cartService");
const baseError = require("../middlewares/baseError");

const createCarts = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) 
        throw new baseError("KEY_ERROR", 400);

    await cartService.createCarts(userId, productId, quantity);

    res.status(201).json({ message: "NEW CART CREATED!" });
};

module.exports = {
  createCarts,
};