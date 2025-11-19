const express = require('express');
const {handleUserSignup, handleUserlogin} = require('../controller/user')
const router = express.Router();

router.post('/signup', handleUserSignup); 
router.post('/login', handleUserlogin); 


router.get("/signup", (req, res) => {
    return res.render("signup");
});
router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;

