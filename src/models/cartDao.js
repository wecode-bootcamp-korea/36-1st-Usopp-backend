const database = require("./dataSource.js");

const cart = async (userId, productId, quantity) => {
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
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  cart,
};
