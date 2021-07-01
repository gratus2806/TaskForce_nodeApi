const express = require('express');
const router = express.Router();



const ctrllogin = require('../controller/userDataDetails');
const ctrlLink = require('../index');

router.post('/user_details',ctrllogin.loginctrl);
router.post('/user_details_reg',ctrllogin.userReg);
router.post('/RegLink',ctrllogin.linkSaveVerify);
router.get('/RegLinkVerify',ctrllogin.getLink_details);
router.get('/getUser_details',ctrllogin.getUser_detailsCtrl);

module.exports = router;