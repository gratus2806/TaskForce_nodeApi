const userAuth = require('../models/userData');
const LinkDetails = require('../models/linkData');

const express = require('express');
const mongoose = require('mongoose');
const app = express();



require('dotenv').config();



module.exports.getLink_details= (req, res) => {
  LinkDetails.find({})
  .then((LinkDetails)=>{
    console.log("LinkDetails",LinkDetails)
    return res.send({LinkDetails})
  })
}
module.exports.linkSaveVerify= (req, res) => {
  const payload = req.body;
  console.log("payload",payload)
  mongoose.connect("mongodb+srv://Gratus2806:gratus2806@cluster0.4bkx2.mongodb.net/TaskForce?retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology: true}
).then(()=>{
    console.log("connected to mongo db Atlas")
    return LinkDetails.findOneAndUpdate({linkId:"grt"}, 
    {
        linkData: payload.linkActive
    },{new: true}, (err, doc) => {
        if (err) {
        console.log("Something wrong when updating data!",err);
        }
        var result = Object.keys(doc).map(function(key) {
            return [doc[key]]
        })
        console.log("results>>>>>>",result)
        return res.send({status : true,result})                
    });
      
}).catch(error=>{
    console.log("Something went Wrong",error)
})

  
  // let newRecord = new LinkDetails({
  //   linkData:payload.linkActive,
  //   linkId:"grt"
  // })
  // return newRecord.save()
  // .then((LinkDetails)=>{
  //     if(!!LinkDetails){
  //         return res.send({status : true })
  //     } else{
  //         return res.send({status : false })
  //     }
  // })
  // return res.send({status : true})
}

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
    SecretCode:payload.SecretCode,
    dose1Date:payload.dose1Date
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
