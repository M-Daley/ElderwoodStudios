const express = require("express"),
    homeController = require('../controllers/react');

let router = express.Router();

router.get('*', homeController.index);

module.exports = router