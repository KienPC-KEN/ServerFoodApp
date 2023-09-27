const express = require("express");
const router = express.Router();

const orderDetailController = require("../controllers/orderDetail.controller")

router.get('/', orderDetailController.getData);
router.post('/create', orderDetailController.createOrderDetail);
router.put('/update/:id', orderDetailController.updateOrderDetail);
router.delete('/delete/:id', orderDetailController.deleteOrderDetail);

module.exports = router;