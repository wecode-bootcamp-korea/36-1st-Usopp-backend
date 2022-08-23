const database = require("./dataSource.js");

const editCart = async (userId, productId, quantity) => {
  try {
    return await database.query(`
      UPDATE carts 
      SET quantity = ? 
      WHERE user_id = ${userId} 
      AND product_id = ${productId}`,
      [quantity]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  editCart,
};
