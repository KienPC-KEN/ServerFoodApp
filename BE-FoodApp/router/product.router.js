const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller")

router.get('/', productController.getProduct);
router.post('/create', productController.createProduct);
router.put('/update/:id', productController.updateProduct);

module.exports = router;