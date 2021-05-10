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
                var nandakhal=[{
                    name:"श्री.प्रशांत रॉड्रिग्ज",
                    phoneNo:"9930951697"
                  
                  },{
                    name:"श्री.रॉजर रॉड्रिग्ज",
                    phoneNo:"9324640909"
                  
                  },{
                    name:"श्री.ऑलीसन तुस्कानो",
                    phoneNo:"8149842464"
                  
                  }];
                var agashi=[{
                    name:"श्री. डेनिस डाबरे",
                    phoneNo:"9820145112"
                
                  },{
                    name:"श्री. सिझर गोन्साल्वीस",
                    phoneNo:"8454040982"
                
                  }];
                var sherlai=[{
                    name:"श्री. सचिन लोपीस",
                    phoneNo:"9224442944"
                
                  },{
                    name:"श्री. जिमी लोपीस",
                    phoneNo:"9881423708"
                
                  }];
                var  rajodi=[{
                    name:"श्री. जेम्स रॉड्रिग्ज",
                    phoneNo:"7507644164"
                
                  },{
                    name:"श्री. रॉबिन रॉड्रिग्ज",
                    phoneNo:"9320076670"
                
                  }];
                var nanbhat=[{
                    name:"श्री. एडविन डाबरे",
                    phoneNo:"9028285176"
                
                  },{
                    name:"श्री. मार्शल लोपीस",
                    phoneNo:"9320076670"
                
                  },{
                    name:"श्री. रिक्सन तुस्कानो",
                    phoneNo:"8329084821"
                
                  },{
                    name:"श्री. बबन लोपीस",
                    phoneNo:"8793070950"
                
                  }];
                var  bolinj=[{
                    name:"श्री. सचिन मेंडीस",
                    phoneNo:"8450956779"
                
                  },{
                    name:"श्री. फ्रेंकी रॉड्रिग्ज",
                    phoneNo:"9763753844"
                
                  }];
                var  umrale=[{
                    name:"श्री. पॉल घोन्साल्विस",
                    phoneNo:"9820138933"
                
                  },{
                    name:"श्री. विजय तुस्कानो",
                    phoneNo:"9561444816"
                
                  }];
                var  mardes=[{
                    name:"श्री.स्विटसन फर्नांडिस",
                    phoneNo:"9762304088"
                
                  },{
                    name:"श्री. फेलिक्स आल्मेडा",
                    phoneNo:"9004927625"
                
                  }];
                var  gomasali=[{
                    name:"श्री. रॉनल्ड गोम्स्",
                    phoneNo:"8007915323"
                
                  },{
                    name:"श्री. विजय वाझ",
                    phoneNo:"9867453694"
                
                  }];
                var  gass=[{
                    name:"श्री. संदीप फिगेर",
                    phoneNo:"9004693334"
                
                  },{
                    name:"श्री. राजा फोस",
                    phoneNo:"9923483344"
                
                  },{
                    name:"श्री. संदेश तुस्कानो",
                    phoneNo:"9869669666"
                
                  }];
                var  nirmal=[{
                    name:"श्री.एलिस डाबरे",
                    phoneNo:"986731442"
                
                  },{
                    name:"श्री. नेल्सन दोडती",
                    phoneNo:"9028259176"
                
                  },{
                    name:"श्री. संजय डाबरे",
                    phoneNo:"9820184279"
                
                  }];
                var  bhaugaon=[{
                    name:"श्री. मेकन्झी डाबरे",
                    phoneNo:"9665006429"
                
                  },{
                    name:"सौ. ज्योत्स्ना डाबरे",
                    phoneNo:"9511228092"
                
                  },{
                    name:"श्री. एवरेस्ट डाबरे",
                    phoneNo:"9987671819"
                
                  }];


                return res.send({status : true,userDetails,nandakhal,agashi,sherlai,rajodi,nanbhat,bolinj,umrale,mardes,gomasali,gass,nirmal,bhaugaon})
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