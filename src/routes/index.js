const express = require("express");
const router = express.Router();

const cartRouter = require("./cartRouter");
router.use("/carts", cartRouter.router);

const userRouter = require("./userRouter");
router.use("/users", userRouter.router);

module.exports = router;
