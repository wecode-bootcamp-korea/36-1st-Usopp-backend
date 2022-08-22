const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.post("/", cartController.cart);
router.get("/", cartController.readCart);
router.patch("/", cartController.editCart);
router.delete("/", cartController.deleteCart);

module.exports = {
  router,
};
