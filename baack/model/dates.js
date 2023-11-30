const mongoose = require ('mongoose')
import userSchema from './user'
const dateSchema = mongoose.Schema({
    date:String,
    datauser:userSchema,
    description:String,
})



module.exports = mongoose.model('dateSchema',dateSchema)