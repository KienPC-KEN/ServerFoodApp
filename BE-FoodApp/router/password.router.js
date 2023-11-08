const express = require('express');
const router = express.Router();
const changePassword = require('../controllers/changePassword.controller')


router.get('/customer', changePassword.changePasswordCustomer);
router.post('/staff', changePassword.changePasswordStaff);

module.exports = router;
