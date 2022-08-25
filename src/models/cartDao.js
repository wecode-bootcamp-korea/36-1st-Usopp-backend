const BaseError = require("../middlewares/baseError.js");
const database = require("./dataSource.js");
  
const editCarts = async (userId, productId, quantity) => {
  try {
    return await database.query(`
      UPDATE carts 
      SET quantity = ? 
      WHERE user_id = ${userId} 
      AND product_id = ${productId}`,
      [quantity]
    );
  }catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  editCarts,
};
