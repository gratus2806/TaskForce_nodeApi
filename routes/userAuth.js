const express = require('express');
const router = express.Router();



const ctrllogin = require('../controller/userDataDetails');


router.post('/user_details',ctrllogin.loginctrl);
router.post('/user_details_reg',ctrllogin.userReg);
// router.get('/noticeBoard',ctrlnotice.noticectrl);
router.get('/getUser_details',ctrllogin.getUser_detailsCtrl);

module.exports = router;