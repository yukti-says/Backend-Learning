const express = require("express");
const app = express();
const userModel  = require("./DAY11/models/user")
const postModel = require("./DAY11/models/posts")

app.get('/' , (req,res)=>{
    res.send("hi yukti")
})




app.get('/create' , async (req,res)=>{
    const user = await userModel.create({
        username:"yukti",
        email:"yukti@gmail.com",
        age:20,
        posts:[]
    })
    res.send(user)
})


app.get('/post/create' , async (req,res)=>{
    let  posts = await postModel.create({
       postdata:"this is a post",
       user:"6844e173d191b3ca16dde377"

    })


    let user = await userModel.findOne({_id:"6844e173d191b3ca16dde377"})
    await user.posts.push(posts._id)
    await user.save()
   

    res.send({posts , user})
})


 











app.listen(3000)