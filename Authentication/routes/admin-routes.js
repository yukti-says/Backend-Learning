const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware')
const isAdmin = require('../middleware/admin-middleware')

router.get("/welcome", authMiddleware, isAdmin ,(req, res) => {
  res.json({
    message: "welcome to admin page route",
  });
});


module.exports = router