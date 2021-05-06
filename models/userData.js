const mongoose = require('mongoose');
// const express = require('express');



const AuthenticationDetails=new mongoose.Schema({
    userId: { type: String },
    status: { type: String },
    password:{ type: String },
    username:{ type: String },
    userVillage:{ type: String },
    userParish:{ type: String },
    userPhone:{type: String },
    createdAt: { type: Date, default: Date.now }
})

module.exports = new mongoose.model('userAuth',AuthenticationDetails)