const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    name:String,
    lastname:String,
    phone:Number,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }

})
module.exports = mongoose.model('userSche',userSchema)