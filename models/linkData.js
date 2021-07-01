const mongoose = require('mongoose');
// const express = require('express');



const AuthenticateLinkDetails=new mongoose.Schema({
    linkData: { type: String },
    linkId:{type: String},
    createdAt: { type: Date, default: Date.now }
})

module.exports = new mongoose.model('linkDetails',AuthenticateLinkDetails)