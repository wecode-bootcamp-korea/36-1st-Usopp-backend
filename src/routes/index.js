const express = require("express");
const router = express.Router();

const productRouter = require("./productRouter");
router.use("/main", productRouter.router);

const userRouter = require("./userRouter");
router.use("/users", userRouter.router);

module.exports = router;