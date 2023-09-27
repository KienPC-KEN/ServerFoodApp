const express = require("express");
const router = express.Router();

const orderDetailController = require("../controllers/orderDetail.controller")

router.get('/', orderDetailController.getData);

module.exports = router;