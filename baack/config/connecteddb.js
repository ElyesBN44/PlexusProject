const mongoose = require('mongoose')
const connectdb=async()=>{
    try{
      await mongoose.connect('mongodb+srv://adminjdid:9BbEynIodYGqLsKI@cluster0.ug9mf1a.mongodb.net/?retryWrites=true&w=majority ')
        console.log('you are connected to ur db')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectdb