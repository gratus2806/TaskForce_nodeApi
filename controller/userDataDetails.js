const userAuth = require('../models/userData');

module.exports.loginctrl = (req, res) => {
    const payload = req.body;
    console.log("payload",payload)
    
    userAuth.find({
        userPhone:payload.userPhone,
        password:payload.Password 
    })
    .then((userAuth)=>{
        if(userAuth!=""){
            // console.log("userAuth",userAuth)
            if(userAuth[0].userPhone==payload.userPhone && userAuth[0].password==payload.Password){
                var userDetails={
                    status: userAuth[0].status,
                    userId: userAuth[0].userId,
                    userParish: userAuth[0].userParish,
                    userPhone: userAuth[0].userPhone,
                    userVillage: userAuth[0].userVillage,
                    username: userAuth[0].username,
                }
                return res.send({status : true,userDetails})
            }  
        } else{
            return res.send({status : false})
        }
    })
    // return res.send({status : true})
}

module.exports.userReg = (req, res) => {
    const payload = req.body;
    console.log("payload",payload)
    
    let newRecord = new userAuth({
        userId: Math.floor(10000000000 + Math.random() * 90000000000),
        status: '1',
        password:payload.userPassword,
        username:payload.userFullName,
        userVillage:payload.userVillage,
        userParish:payload.userParish,
        userPhone:payload.userPhoneNumber,
    })
    return newRecord.save()
    .then((userAuth)=>{
        if(!!userAuth){
            return res.send({status : true })
        } else{
            return res.send({status : false })
        }
    })
    
    // return res.send({status : true})
}