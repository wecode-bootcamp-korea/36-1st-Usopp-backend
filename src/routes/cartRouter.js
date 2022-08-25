const express = require("express");
const router = express.Router();

router.get("/", cartController.readCart);

const cartController = require("../controllers/cartController");
const errorhandler = require("../middlewares/errorHandler");
const auth = require("../middlewares/auth");

router.post("/", auth.validateToken, errorhandler(cartController.createCarts));

module.exports = {
  router,
};
