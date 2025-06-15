const mongoose = require('mongoose');

// connect to mongodb port and then write database name any name you can give
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractise`);


// defining the schema , userSchema is a method which accepts the object, schema mean what features you wonna give what a user will have
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email:String
})

// creating model for crud operation
// give user model and then what schema it has to follow
// mongoose.model"user", userSchema) //jo bhi name rakhoge use puralize kiya jata h so model name will be ->users


// CRUD when user go to
//  -> /register ->create user
// -> /read ->read user
// -> /update ->update user
// -> /delete ->delete user
// on each route we need to work so without exporting model you can not use the model and work on it

// use a export property
module.exports = mongoose.model("user", userSchema)