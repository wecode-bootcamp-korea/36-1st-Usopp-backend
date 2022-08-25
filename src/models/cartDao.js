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
};

const readCarts = async (userId) => {
  try {
    return await database.query(`
      SELECT 
        p.size,
        p.price,
        p.name,
        c.product_id, 
        c.quantity 
      FROM carts c 
      INNER JOIN products p 
      ON c.product_id = p.id
      WHERE c.user_id = "${userId}"`
    );
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

const editCarts = async (userId, productId, quantity) => {
  try {
    return await database.query(`
      UPDATE carts 
      SET quantity = ?
      WHERE user_id = "${userId}"
      AND product_id = ${productId}`,
      [quantity, userId, productId]
    );
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

const deleteCarts = async (cartId) => {
  try {
    return await database.query(`
      DELETE FROM carts
      WHERE carts.id = ${cartId}`
    );
  } catch (err) {
    throw new BaseError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  createCarts,
  existCart,
  plusQuantity,
  readCarts,
  editCarts,
  deleteCarts,
};