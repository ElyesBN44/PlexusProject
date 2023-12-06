const userSchema = require('../model/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
exports.register=async(req,res)=>{
    try{
        const{name,email,password}=req.body
        const found = await userSchema.findOne({email})
    if(found){return res.json({msg:'sorry user already logged in , go back to page login'})}

    const newUser= await new userSchema(req.body)
    const saltRounds=10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt)
    newUser.password = hash

    newUser.save()
    res.status(200).json({msg:'welcome to the site',newUser})
    }catch(err){
console.log(err)
    }
}

exports.login=async(req,res)=>{
    try{ 
        const {password,email}=req.body
    const found = await userSchema.findOne({email})
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


exports.GetContact=async(req,res)=>{
    try{
    const Contacts = await userSchema.find()
    res.status(200).send({Contacts,msg:'list of ocntact'})
    }catch{
    res.status(500).send('could not get contacts')
    }
    }