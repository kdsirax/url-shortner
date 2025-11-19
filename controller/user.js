 const User = require("../models/user")
 const { createSessionForUser } = require("../services/auth");
 
 
 async function handleUserSignup( req, res){
    const {name, email, password}= req.body;
    await User.create({
        name ,
        email,
        password,

    });
return res.redirect("/");

 }
 async function handleUserlogin( req, res){
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email, password });
    if (!existingUser) {
       return res.render("login", {
         error: "Invalid email or password",
       });
    }
    const token = createSessionForUser(existingUser);
    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/; SameSite=Lax`);
    return res.redirect("/");
 }
 module.exports ={
    handleUserSignup,
    handleUserlogin,
 }