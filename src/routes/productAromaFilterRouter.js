const express = require("express");
const productAromaFilterController = require("../controllers/productAromaFilterController");
const errorHandler = require("../middlewares/errorhandler");

const router = express.Router();

router.get("/:aromaId", errorHandler(productAromaFilterController.productAromaFilter))

module.exports = {
    router,
};
