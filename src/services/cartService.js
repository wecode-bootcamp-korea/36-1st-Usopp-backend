const database = require("typeorm");
const cartDao = require("../models/cartDao");

const readCarts = async (userId) => {
  return await cartDao.readCarts(userId);
};

module.exports = {
  readCarts,
};
