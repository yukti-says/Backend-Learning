require("dotenv").config();
const express = require("express");
const connectToDB = require('./database/db')
const authRoutes = require('./routes/auth-route')
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");
const getAll = require('./routes/get-all')


connectToDB()

const app = express();
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())

app.use('/api/auth', authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users"  , getAll);



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    
})