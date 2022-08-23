const database = require("./dataSource.js");

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
}

module.exports = {
  readCart,
};
