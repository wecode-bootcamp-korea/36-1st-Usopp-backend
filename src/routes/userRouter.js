const express = require("express");
const userController = require("../controllers/userController");

const errorHandler = require("../middlewares/errorHndler");

const router = express.Router();

router.post("/check", errorHandler(userController.emailCheck));
router.post("/signup", errorHandler(userController.signUp));
router.post("/signin", errorHandler(userController.signIn));

module.exports = {
  router,
};
