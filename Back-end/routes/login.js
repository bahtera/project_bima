const express = require("express");
const Login = require("../models/admin");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", (req, res) => {

    Login.findOne({ username : req.body.username, password : req.body.password}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else if(!result){ 
            res.status(404).json({ message : "User not found !"});
        }
        else {
            const payload = {
                id : result._id,
                name : result.username
            };
            const token = jwt.sign(payload, "secretkey", { expiresIn : 3600 });    
            res.json({ token : token});
        }

    });
});

module.exports = (function(){
    return router;
})();