const express = require("express");
const router = express.Router();

const orderDetailController = require("../controllers/orderDetail.controller")

router.get('/', orderDetailController.getData);
router.post('/create', orderDetailController.createOrderDetail);
router.put('/update/:id', orderDetailController.updateOrderDetail);

module.exports = router;