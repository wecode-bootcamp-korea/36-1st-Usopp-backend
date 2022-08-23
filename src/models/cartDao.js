const database = require("./dataSource.js");

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
  deleteCart,
};
