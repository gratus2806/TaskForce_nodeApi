const mongoose = require('mongoose');
// const express = require('express');



const AuthenticationDetails=new mongoose.Schema({
    userId: { type: String },
    "Child Full Name": { type: String },
    Age:{ type: String },
    "Parent Full Name":{ type: String },
    "Mobile Number":{ type: Number },
    Village:{ type: String },
    Parish:{type: String },
    Gender:{ type: String },
    "Any History Of Allergies":{ type: String },
    "Dose 1":{ type: String },
    "Secret Code":{type: Number},
    createdAt: { type: Date, default: Date.now }
})

module.exports = new mongoose.model('userAuth',AuthenticationDetails)