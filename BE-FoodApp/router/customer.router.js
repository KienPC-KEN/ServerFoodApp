const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.controller")

router.get('/', customerController.getData)
router.post('/addCustomer', customerController.addData)
router.put('/updateCustomer', customerController.updateData)
router.delete('/deleteCustomer', customerController.deleteData)

router.post('/searchPhoneCustomer', customerController.search)

module.exports = router;