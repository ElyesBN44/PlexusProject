const express = require('express')

const adminRoute = express.Router()
const postSchema = require('../model/post')



// http://localhost:4000/postadmin/allposts/

adminRoute.get('/allposts',async(req,res)=>{
    try{
        const post = await postSchema.find()
        res.status(200).json({msg:'all posts',post})
            }catch(err){
                console.log(err) 
            }
        })
// http://localhost:4000/postadmin/getunique/

adminRoute.get('/getunique/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const uniquePost = await fetchDataById(id)
        res.status(200).json({ data: uniqueData })
    } catch(err) {
        console.log(err);
       
    }
        
    })


// http://localhost:4000/postadmin/addPost

adminRoute.post('/addPost',async(req,res)=>{
    try{
        const newPost = new postSchema(req.body)
   await  newPost.save()
     res.status(200).json({msg:'you could add ur new post',newPost})
    }catch(err){
        console.log(err)
        res.status(400).send('rak ghalit thebit 9bel')
    }
})

// http://localhost:4000/postadmin/changePost/:id
adminRoute.put('/changePost/:id',async(req,res)=>{
    try{
        const{id}=req.params
        const updatepost = await postSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:"updated post",updatepost})
    }catch(err){
        console.log(err)
    }
})


// http://localhost:4000/postadmin/deletePost/:id


adminRoute.delete('/deletePost/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deletePost= await postSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'post deleted'})
    }catch(err){
        console.log
    }
})







module.exports=adminRoute