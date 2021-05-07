const AuthenticationDetails = require('../models/userData');

module.exports.loginctrl = (req, res) => {
    const payload = req.body;
    console.log("payload",payload)
    
    AuthenticationDetails.find({
        userPhone:payload.userPhone,
        password:payload.Password 
    })
    .then((authenticationDetails)=>{
        if(authenticationDetails!=""){
            // console.log("authenticationDetails",authenticationDetails)
            if(authenticationDetails[0].userPhone==payload.userPhone && authenticationDetails[0].password==payload.Password){
                var userDetails={
                    status: authenticationDetails[0].status,
                    userId: authenticationDetails[0].userId,
                    userParish: authenticationDetails[0].userParish,
                    userPhone: authenticationDetails[0].userPhone,
                    userVillage: authenticationDetails[0].userVillage,
                    username: authenticationDetails[0].username,
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
    
    let newRecord = new AuthenticationDetails({
        userId: Math.floor(10000000000 + Math.random() * 90000000000),
        status: '1',
        password:payload.userPassword,
        username:payload.userFullName,
        userVillage:payload.userVillage,
        userParish:payload.userParish,
        userPhone:payload.userPhoneNumber,
    })
    return newRecord.save()
    .then((AuthenticationDetails)=>{
        if(!!AuthenticationDetails){
            return res.send({status : true })
        } else{
            return res.send({status : false })
        }
    })
    
    // return res.send({status : true})
}