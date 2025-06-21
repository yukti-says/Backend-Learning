const express = require("express");
const router = express.Router();
const user = require('../models/user')

router.get("/all", async (req, res) => {
    try {
        const users = await user.find({})
        res.json({users})

 }
    catch (e) {
        res.status(500).json({
            error:"failed to fetch ppl"
        })
 }
});

module.exports = router;
