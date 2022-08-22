const express = require("express");
const router = express.Router();
const sign = require("../middlewares/sign");

const cartRouter = require("./cartRouter");
router.use("/cart", sign.myCustomMiddleware, cartRouter.router);

module.exports = router;
