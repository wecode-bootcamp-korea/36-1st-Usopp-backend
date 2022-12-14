const express = require("express");
const router = express.Router();


const productRouter = require("./productRouter");
router.use("", productRouter.router);

const cartRouter = require("./cartRouter");
router.use("/carts", cartRouter.router);


const userRouter = require("./userRouter");
router.use("/users", userRouter.router);

const productAromaRouter = require("./productAromaFilterRouter");
router.use("/aromas", productAromaRouter.router);

module.exports = router;

