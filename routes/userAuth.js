const express = require('express');
const router = express.Router();



const ctrllogin = require('../controller/userDataDetails');
const ctrlReg = require('../controller/userDataDetails');
const ctrlnotice = require('../controller/userDataDetails');


router.post('/user_details',ctrllogin.loginctrl);
router.post('/user_details_reg',ctrlReg.userReg);
router.get('/noticeBoard',ctrlnotice.noticectrl);

module.exports = router;