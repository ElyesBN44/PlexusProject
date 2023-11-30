const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    name:String,
    lastname:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        defaul:"admin"
    }
})
module.exports = mongoose.model('adminSchema',adminSchema)