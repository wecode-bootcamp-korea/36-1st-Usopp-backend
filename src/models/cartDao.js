const BaseError = require("../middlewares/baseError.js");
const database = require("./dataSource.js");

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

module.exports = {
  readCarts,
};
