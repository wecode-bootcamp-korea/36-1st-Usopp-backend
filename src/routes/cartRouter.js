const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.delete("/", cartController.deleteCart);

module.exports = {
  router,
};
