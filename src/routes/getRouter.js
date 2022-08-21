
const express = require('express');
const getController = require('../controllers/getController');

const router = express.Router();

router.get("/main", getController.getMain);

module.exports = {
    router
};