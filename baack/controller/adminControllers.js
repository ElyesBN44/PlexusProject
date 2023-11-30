const adminSchema= require('../model/admin')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    try{
        const{name,email,password}=req.body
        const found = await adminSchema.findOne({email})
    if(found){return res.json({msg:'sorry user already logged in , go back to page login'})}

    const newAdmin= await new adminSchema(req.body)
    const saltRounds=10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt)
    newAdmin.password = hash

    newAdmin.save()
    res.status(200).json({msg:'welcome to the site',newAdmin})
    }catch(err){
console.log(err)
    }
}
exports.login=async(req,res)=>{
    try{ 
        const {password,email}=req.body
    const found = await adminSchema.findOne({email})
     if(!found){return res.json({msg:'email introuvable'})}

    const match = bcrypt.compare(password,found.password)
    if(!match){return res.json({msg:'wrong password'})}
    const payload={id:found._id}
    var token = jwt.sign(payload,process.env.privateKey)
    res.json({msg:'welcome login',found,token})

    }catch(err){
console.log(err)
    }
}