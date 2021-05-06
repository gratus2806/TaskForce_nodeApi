const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// ?connect to mongo db atlas
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true}
).then(()=>{
    console.log("connected to mongo db Atlas")
}).catch(error=>{
    console.log("Something went Wrong",error)
})
app.listen(PORT,()=>{
    console.log("server started at port",PORT)
})