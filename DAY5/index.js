const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apka backend kya render karega , ejs
app.set("view engine", "ejs");
// static files iss path pe hai
app.use(express.static(path.join(__dirname , 'public')))
app.get("/", (req, res) => {
    fs.readdir(`./files`, function (err,files) {
        res.render("index",{files:files});
    })
    
})


app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, (err) => {
        res.redirect('/')
    })
    
})


// : ka mean h ye part dynamic hai and jab bhi koi bhi url iss pattern ko match karega wo chalne lagega : ke baad ye variable ban chuka h,usually waha pe username likha jata h : ke baad 
// app.get('/profile/:username', (req, res) => {
//     // req.params.username when u wanna username and handle them
//     res.send(`<h1> hellow ${req.params.username} </h1>`)

// })

// app.get('/profile/:username/:age', (req, res) => {
//     res.send(`<h1>
//         Helloow miss ${req.params.username} you are ${req.params.age} legitt </h1>`)
// })


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})