const BaseError = require("../middlewares/baseError.js");
const database = require("./dataSource.js");

const createCarts = async (userId, productId) => {
  try {
    const result = await database.query(`
      INSERT INTO carts (
        user_id,
        product_id,
        quantity
      ) VALUES (${userId}", "${productId}", 1);`
    );
    return result;
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

const existCart = async (userId, productId) => {
  try {
    const result = await database.query(`
      SELECT EXISTS
        (SELECT
          user_id,
          product_id
        FROM carts
        WHERE user_id = ${userId}
        AND product_id = ${productId})`
    );
    return result;
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

const plusQuantity = async (userId, productId) => {
  try {
    const result = await database.query(`
      UPDATE carts 
      SET quantity = quantity + 1
      WHERE user_id = ${userId} 
      AND product_id = ${productId}`
    );
    return result;
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  createCarts,
  existCart,
  plusQuantity,
};
