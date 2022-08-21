const express = require("express");
const router = express.Router();

const getRouter = require("./getRouter");
router.use("", getRouter.router);

module.exports = router;