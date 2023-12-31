const express = require('express')
const userRoute= express.Router()
const { register,login, GetContact } = require('../controller/userControllers')
const { isAuth } = require('../middelwares/isAuth')
const { registerValidation,loginValidation,validation } = require('../middelwares/RegisterValidatio')


//http://localhost:4000/user/register
userRoute.post('/register',registerValidation,validation,register)

//http://localhost:4000/user/login
userRoute.post('/login',loginValidation,validation,login)

//http://localhost:4000/user/moncompte
userRoute.get('/me',isAuth,(req,res)=>{
    res.send(req.user)
})


//http://localhost:4000/user/updatecompte
userRoute.put('/upcompte/:id',isAuth,(req,res)=>{
    res.send(req.user)
})

//http://localhost:4000/user/updatecompte
userRoute.get('/admin_allusers',GetContact)



module.exports=userRoute