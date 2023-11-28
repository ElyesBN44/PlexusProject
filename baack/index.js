const express = require('express')
const app= express()
const cors = require('cors')
const port = 4000
const connectdb=require('./config/connecteddb')
const userRoute = require('./routes/routeuser')
require('dotenv').config()

app.use(cors())
app.use(express.json())

connectdb() 

app.use('/auth',userRoute)


app.listen(port,err=>{
    err?console.log(err):console.log(`go port${port}`)
})