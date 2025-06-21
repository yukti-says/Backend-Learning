const User = require('../models/user')
const bcrypt = require('bcrypt')
// registration controller
const jwt = require('jsonwebtoken')
const registerUser = async (req, res) => {
    try {
        // get all info from frontend extract user info from user.req.body
        const { username, email, password , role} = req.body;

        // check if user already there in our db
        const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] })
        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message:"user already exist"
            })
        }
        
        // and if not user exist first hash the password and then save the user details
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        
        // now u can create a new user and save in ur database
        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role:role || 'user'
        })

        newlyCreatedUser.save()

        if (newlyCreatedUser) {
            res.status(201).json({
                success: true,
                message:"user registered"
            })
        }
        else {
            res.status(400).json({
              success: false,
              message: "Some error occured please try again",
            });
        }


    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message:"Something went wrong"
        })
        
    }
}



// login controller
const LoginUser = async (req, res) => {
    try {
        //  username se checking both email are also unique
        const { username, password } = req.body
        // check if user exist or not
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({
                success: false,
                message:'invalid username or password'
            })
        }

        // if password is currect or not
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        
        if (!isPasswordMatch)
        {
            return res.status(400).json({
              success: false,
              message: "invalid username or password",
            });
        }

        // create usertoken which store all the data of user that you store in cookie and pass to frontent
        const accessToken = jwt.sign({
            userId: user._id,
            username: user.username,
            role:user.role
            // no password here this token will bear or hold these data of user
        }, process.env.JWT_SECRET_KEY,
            { expiresIn: '15m' })
        
        
        res.status(200).json({
            success: true,
            message: "logged in successful",
            accessToken
        })

      
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {registerUser , LoginUser}