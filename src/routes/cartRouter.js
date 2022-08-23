const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");

router.post("/", errorHandler(cartController.createCarts));

module.exports = {
  router,
};