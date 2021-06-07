const express = require('express');
const router = express.Router();



const ctrllogin = require('../controller/userDataDetails');
const ctrlReg = require('../controller/userDataDetails');
// const ctrlnotice = require('../controller/userDataDetails');
const ctrlgetUser_details = require('../controller/UserDataDetails');

router.post('/user_details',ctrllogin.loginctrl);
router.post('/user_details_reg',ctrlReg.userReg);
// router.get('/noticeBoard',ctrlnotice.noticectrl);
router.get('/getUser_details',ctrlgetUser_details.getUser_detailsCtrl);

module.exports = router;