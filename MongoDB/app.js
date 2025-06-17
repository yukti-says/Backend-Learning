const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://jarkyamin:hGy97uBEHWVTmXDL@cluster0.ydfgv0i.mongodb.net/"
)
    .then(() => console.log("connected"))
    .catch(e=>console.log("not connected"))


// create user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createAt: {
    type: Date,
    default:Date.now
  }
})
   
// usermodel
const User = mongoose.model('User', userSchema)

async function runQuery() {
  try {
    // create new user aka document
    // const newuser = await User.create({
    //   name: "saniya singh",
    //   email: "psjfr@gmail.com",
    //   age: 22,
    //   isActive: false,
    //   tags:['lovering',"web dev"]
    // })

    // console.log("created user",newuser)

    // get all users
    // const allusers = await User.find()
    // console.log(allusers)

    // users those who are not active
    // const oneuser = await User.findOne({ isActive: false })
    // console.log(oneuser)

    // get only selected users with selected features
    const selecteduser = await User.find({isActive:false}).select("name email -_id")
    console.log(selecteduser)

 

  }
  catch (e) {
    console.log('error ->',e)
  }
  finally {
    await mongoose.connection.close()
  }
}

runQuery()