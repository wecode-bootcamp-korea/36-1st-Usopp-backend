const BaseError = require("../middlewares/baseError.js");
const database = require("./dataSource.js");
const baseError = require("../middlewares/baseError")
  
const deleteCarts = async (cartId) => {
  try {
    return await database.query(`
      DELETE FROM carts
      WHERE carts.id = ${cartId}`,
    );
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  deleteCarts,
};