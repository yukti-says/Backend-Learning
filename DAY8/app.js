const cookieParser = require('cookie-parser')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 
const app = express()


app.use(cookieParser())
// app.get('/', (req, res) => {
//     res.cookie("name", "yukti")
//     res.send("done")
// })
// app.get('/read', (req, res) => {
//     console.log(req.cookies)
//     res.send("read page")
// })

// to hash a passowrd ->encrypt
// saltRound = 10
// app.use('/', (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         // console.log(salt) see saly
//         bcrypt.hash("12344232", salt, function(err, hash) {
//             // Store hash in your password DB.
//             // console.log(hash) hashed password
//         });
//     })
// })

// decrept actually we do compare
// app.get('/', (req, res) => {
//     myPlaintextPassword = '12344232'
//     hash = "$2b$10$W3AZIY620mcbJHKpljdBLO3iyrN1pWQIlh3k4ri2bdx4LcbApQ2tm"

//     bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//         // result == true
//         console.log(result)
//     });
    
// })

// JWT
// this string is set by us and we usually store emails on server
app.get('/', (req, res) => {
    let token = jwt.sign({ email: "psor94@gmail.com" }, "secret")
    // jwt.sign({getemail , a-secret-string})
    // secret string ke bases pe hi data encrypt hota h and if u get secret string to u can decrypt the data and read it.
    res.cookie("token" , token)
    console.log(token)
    res.send("done")
    // or req.send(req.cookie.token)
})

app.get('/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})



app.listen(3000)