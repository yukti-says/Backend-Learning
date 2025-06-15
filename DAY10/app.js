const express = require('express');
const app = express();
const PORT = 3000;


const jwt = require('jsonwebtoken');
const path = require('path');
const cookieParser = require
    ('cookie-parser')
const userModel = require('./models/user')
const bcrypt = require('bcrypt')





// Middleware
app.set("view engine" , "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



// Routes
app.get('/', (req, res) => {
    res.render('index')
});


app.post('/create',  (req, res) => {
    // res.render('index')
    let { username, email, password, age } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            // save hash 
            let createdUser = await userModel.create({
                username: username,
                email: email,
                password: hash, //now you are not creating password plain one but first you encrypted it and now creating user with encrypted password
                age: age
            })
            
            
            //now account is created so login now
            const token = jwt.sign({email : email} , "secret-key" , )
            res.cookie("token", token)


            res.send(createdUser)
           


           
        })
    }) 
    
});

// for login
app.get('/login', (req, res) => {
    res.render('login')
})
    

app.post('/login',  async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send("something went wrong")
    
    // if user is there
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        // since user is logged in so now we have to send token to him to be saved on browser
       
        if (result)
        
        {
            const token = jwt.sign({email : user.email},"secret-key" , )
            res.cookie("token", token)
            res.redirect('/')

        }

       else res.send("something went wrong ") 
        
        
    })
   
    
})


app.get('/logout', (req, res) => {
    // for logout you just need to remove token
    // res.render('index')
    res.cookie("token", "");
    res.redirect('/')

    
})












// Start server
app.listen(PORT);