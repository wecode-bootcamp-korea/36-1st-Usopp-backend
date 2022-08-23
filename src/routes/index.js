const express = require("express");
const router = express.Router();
const sign = require("../middlewares/sign");

const cartRouter = require("./cartRouter");
router.use("/carts", sign.loginRequired, cartRouter.router);

const userRouter = require("./userRouter");
router.use("/users", userRouter.router);

module.exports = router;
