const mongoose = require('mongoose');
// const express = require('express');



const AuthenticationDetails=new mongoose.Schema({
    userId: { type: String },
    chieldFullName: { type: String },
    Age:{ type: String },
    parentFullName:{ type: String },
    mobileNo:{ type: Number },
    Village:{ type: String },
    Parish:{type: String },
    Gender:{ type: String },
    anyHistoryOfAllergies:{ type: String },
    Dose1:{ type: String },
    SecretCode:{type: Number},
    dose1Date:{type: String},
    createdAt: { type: Date, default: Date.now }
})

module.exports = new mongoose.model('userAuth',AuthenticationDetails)