const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");
const errorhandler = require("../middlewares/errorHandler");
const auth = require("../middlewares/auth");

router.get("", auth.validateToken, errorhandler(cartController.readCarts));

module.exports = {
  router,
};
