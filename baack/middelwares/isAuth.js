var jwt = require('jsonwebtoken');

const adminSchema=require('../model/admin')
const userSchema= require('../model/user')

exports.isAuth=async(req,res,next)=>{
    try{

     const token = req.header('Authorization')
    
     var decoder = jwt.verify(token,process.env.privateKey)

     if(!decoder){return res.status(404).json({msg:'ynejimich yodkhel'})}

     const user = await userSchema.findById(decoder.id)
     req.user = user
     
        next()
    }catch(err){

    }
}

exports.isAuth=async(req,res,next)=>{
    try{

     const token = req.header('Authorization')
    
     var decoder = jwt.verify(token,process.env.privateKey)

     if(!decoder){return res.status(404).json({msg:'ynejimich yodkhel'})}

     const admin = await adminSchema.findById(decoder.id)
     req.admin = admin
     
        next()
    }catch(err){

    }
}