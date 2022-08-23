const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.patch("/", cartController.editCart);

module.exports = {
  router,
};
