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
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

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

const deleteCart = async (cartId) => {
  try {
    return await database.query(`
        DELETE FROM carts
        WHERE carts.id = ${cartId}`,
        [cartId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  cart,
  readCart,
  editCart,
  deleteCart,
};
