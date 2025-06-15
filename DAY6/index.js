// install express mongoose

const express = require('express')
const app = express()

const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send("Hellow Yukti")
    
})
// so jab bhi koi /create route pe aaye to iss bases pe create karo
// this will be asyncronuous code defined my mongodb , mongoose ke through jo bhi code hoga wo asynchronous hi hoga
// using await has a requirement that nearest function pe async add kar do
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        // pass the data
       
           
            name: "yuko",
            email: "yukti@gmail.com",
            username: "yuki"
        
        
        
       
    })
    
    res.send(createduser)    
    // you will get two extra properies here :
    // _id : 12bytes , 24 characters ->starting ke 3-4 bytes tells you about timestamp kitne baj ke kya banaya tha,and baki ki chije machine and network info rahti h process se related info hoti h 

})


app.get('/update', async (req, res) => {
    // let updateuser = await userModel.findOneAndUpdate(findone , kya update karna h , {new:tue} isse updated user milega )
    let updateduser = await userModel.findOneAndUpdate({ username: "yukti" }, { name: "Yukti sahuji" }, { new: true })
    res.send(updateduser)
    
})


app.get("/read", async function (req,res) {
    let users = await userModel.find(); //this will show all the users
    // read only one particular user
    // let user = await userModel.find({username:"yukti"})
    // also you can use find->gives array and findOne gives you ->object and first user it will give
    res.send(users)
})


app.get('/delete',  async function (req, res) {
    let deleteduser = await userModel.findOneAndDelete({ username: "yukti" })
    res.send(deleteduser); // get user so that you can show messages like username hey your account has been deleted
})

app.listen(3000);

// install json view extention for better view for json data