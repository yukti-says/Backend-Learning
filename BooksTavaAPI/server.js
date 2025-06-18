require("dotenv").config();

const express = require("express");
const connectDB = require("./database/db");
const bookRoutes = require('./routes/book-routes')

const app = express();
const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// middleware
app.use(express.json());


// create routers here
// this will be a parent route
app.use('/api/books', bookRoutes)
// meaning : /api/books/get , /api/books/get:2 , /api/books/add , /api/book/delete/2303  etc etc

app.listen(PORT, () => {
  console.log(`server is now running on PORT ${PORT}`);
});
