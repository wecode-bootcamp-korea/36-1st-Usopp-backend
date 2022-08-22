const express = require("express");
const userController = require("../controllers/userController");
const { emailCheck } = require("../services/userService");

const router = express.Router();

router.post("/check", userController.emailCheck);
router.post("/signup", userController.signUp);
router.post("/signin",userController.signIn);

module.exports = {
    router,
};
