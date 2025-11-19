// requiring express
const express = require("express");
const path = require("path");

const { connectMongodb } = require("./connect");
const urlRoute = require('./routes/url');
const { URL } = require("./models/url");


// create a app using express
const app = express();
const PORT = 8001;

connectMongodb("mongodb://127.0.0.1:27017/short-url").then(() => console.log("✅ Mongo DB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
// middleware to parse json body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add this route to your main server file
app.get("/", async (req, res) => {
    // Find all URLs in the database
    const allUrls = await URL.find({});
    
    // Render the 'home' view and pass the data
    return res.render("home", {
        urls: allUrls,
    });
});


app.use("/url", urlRoute);

app.get('/:shortId',async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId
       },
        {
             $push: 
             { visitHistory: { timestamp: Date.now()}
              }
            
            },
        { new: true }
        );
        res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`🚀server started at Port: ${PORT}`));

