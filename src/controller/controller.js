const textModel = require('../model/model')




const write = async function (req,res){
    try{
       
       await textModel.create(req.body)
       console.log(req.body)
       return res.status(201).send({status: true, message : "successfully stored"})
    }
    catch(err){
        return res.status(500).send(err)
    }
}

const fetch = async function (req, res){
    try{
     let info = await textModel.find()
     info = info.join(' ')
     return res.status(200).send({status: true, message : "successfully stored", data:info})
    }
    catch(err){
        return res.status(500).send(err) 
    }
}



module.exports.write = write
module.exports.fetch = fetch
