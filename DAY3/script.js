// setting up basic express js server

const express = require('express') //you requiring this package and const express me aa chuki h 
// express() is function use ham chalate h and jab ham ise chalate h , to ye hame sab kuch deta h jo express me hota h 
const app = express()
const port = 3000


//routes create karna
// app.get(route , requestHandler{it is a middleware too}) )

// middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

app.use((req, res, next) => {
  console.log("Middleware is running")
  next();
})

app.use((req, res, next) => {
  console.log("Middleware is running again  and also for about section")
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/profile", (req, res , next) => {
  res.send("this is my e - profile")
  return next(new Error("This is an error from profile route")) // this will go to error handler on console
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!') //this goes on frontend
})

app.listen(port)


