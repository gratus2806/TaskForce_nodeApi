const AuthenticationDetails = require('../models/userData');

module.exports.loginctrl = (req, res) => {
    const payload = req.body;
    console.log("payload",payload)
    
    AuthenticationDetails.find({
        userPhone:payload.userPhone,
        password:payload.password 
    })
    .then((authenticationDetails)=>{
        console.log("authenticationDetails",authenticationDetails)
        if(authenticationDetails!=""){
            if(authenticationDetails[0].userPhone==payload.userPhone && authenticationDetails[0].password==payload.password){
                return res.send({status : true,authenticationDetails})
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
        password:'gratus2806',
        username:'Gratus Dbritto',
        userVillage:'JELADI',
        userParish:'NANDAKHAL',
        userPhone:'9762173505'
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