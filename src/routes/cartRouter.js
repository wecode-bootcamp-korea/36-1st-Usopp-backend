const express = require("express");
const cartController = require("../controllers/cartController");
const errorhandler = require("../middlewares/errorHandler");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth.validateToken, errorhandler(cartController.createCarts));
router.get("/", auth.validateToken, errorhandler(cartController.readCarts));
router.patch("/", auth.validateToken, errorhandler(cartController.editCarts));
router.delete("/", auth.validateToken, errorhandler(cartController.deleteCarts));

module.exports = {
  router,
};