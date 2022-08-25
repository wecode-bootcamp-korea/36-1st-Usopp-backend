const BaseError = require("../middlewares/baseError.js");
const database = require("./dataSource.js");

const createCarts = async (userId, productId) => {
  try {
    const result = await database.query(`
      INSERT INTO carts (
        user_id,
        product_id,
        quantity
      ) VALUES ("${userId}", "${productId}", 1);`
    );
    return result;
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

const existCart = async (userId, productId) => {
  try {
    const result = await database.query(`
      SELECT EXISTS (SELECT * FROM carts WHERE user_id = ${userId} AND product_id = ${productId}) AS isExists `
    );
    
    return +result[0].isExists;

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
}

const readCart = async (productId, size, quantity, price, userId) => {
  try {
    return await database.query(`
        SELECT 
            c.product_id, 
            p.size, 
            c.quantity, 
            p.price 
        FROM carts c 
        INNER JOIN products p 
        ON c.product_id = p.id
        WHERE c.user_id = ${userId}`,
      [productId, size, quantity, price]
    );
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
}

module.exports = {
  readCart,
  createCarts,
  existCart,
  plusQuantity,
};
