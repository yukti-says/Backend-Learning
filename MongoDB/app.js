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
    const newuser = await User.create({
      name: "yukti",
      email: "psjfr@gmail.com",
      age: 20,
      isActive: true,
      tags:['coder','cooker','cooler']
    })

    console.log("created user",newuser)
  }
  catch (e) {
    console.log('error ->',e)
  }
  finally {
    await mongoose.connection.close()
  }
}

runQuery()