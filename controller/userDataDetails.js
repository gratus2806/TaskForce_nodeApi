const userAuth = require('../models/userData');

module.exports.loginctrl = (req, res) => {
  const payload = req.body;
  console.log("payload",payload)
  if(!!payload.secNo){
    userAuth.find({
      SecretCode:parseInt(payload.secNo, 10),
    })
    .then((userAuth)=>{
      console.log("userAuth",userAuth)
        if(userAuth!=""){
            console.log("userAuth",userAuth)
            return res.send({status : true,parishName:userAuth[0].Parish})
          } else{
              return res.send({status : false})
          }
      })
  }else{
    userAuth.find({
      mobileNo:parseInt(payload.mobNO, 10) 
    })
    .then((userAuth)=>{
      
        if(userAuth!=""){
            // console.log("userAuth",userAuth['Parish'])
            return res.send({status : true,parishName:userAuth[0].Parish})
          } else{
              return res.send({status : false})
          }
      })
  }
}
module.exports.getUser_detailsCtrl= (req, res) => {
  userAuth.find({})
  .then((userAuth)=>{
    console.log("userAuth",userAuth)
    return res.send({userAuth})
  })
}

module.exports.userReg = (req, res) => {
  const payload = req.body;
  let newRecord = new userAuth({
    userId: Math.floor(10000000000 + Math.random() * 90000000000),
    chieldFullName: payload.childName,
    Age:payload.Age,
    parentFullName:payload.parentName,
    mobileNo:payload.mobileNo,
    Village:payload.Village,
    Parish:payload.Parish,
    Gender:payload.Gender,
    anyHistoryOfAllergies:payload.selectedHistory,
    Dose1:payload.selectedDose,
    SecretCode:payload.SecretCode
  })
  return newRecord.save()
  .then((userAuth)=>{
      if(!!userAuth){
          return res.send({status : true })
      } else{
          return res.send({status : false })
      }
  })
  return res.send({status : true})
}
