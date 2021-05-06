const express = require('express');
const router = express.Router();



const ctrllogin = require('../controller/userDataDetails');
const ctrlReg = require('../controller/userDataDetails');


router.get('/user_details',ctrllogin.loginctrl);
router.post('/user_details_reg',ctrlReg.userReg);

module.exports = router;