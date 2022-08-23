const database = require("./dataSource.js");
const baseError = require("../middlewares/baseError")

const createCarts = async (userId, productId, quantity) => {
  try {
    return await database.query(`
        INSERT INTO carts (
            user_id,
            product_id,
            quantity
        ) VALUES (?, ?, ?);`,
      [userId, productId, quantity]
    );
  } catch (err) {
    throw new baseError("INVALID_DATA_INPUT");
  }
};

module.exports = {
  createCarts,
};