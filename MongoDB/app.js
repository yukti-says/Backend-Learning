const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://jarkyamin:hGy97uBEHWVTmXDL@cluster0.ydfgv0i.mongodb.net/"
)
    .then(() => console.log("connected"))
    .catch(e=>console.log("not connected"))
