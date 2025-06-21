const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
  //    get your header and it will give you token
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied you have to do login first",
    });
    }
    
    // decode this token
    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodeToken);

        req.userInfo = decodeToken
        next();
        
    }
    catch (e) {
        console.log(e);
        
        return res.status(500).json({
          success: false,
          message: "Access denied you have to do login first",
        });
    }


};

module.exports = authMiddleware;
