//  acquire mongoose
const mongoose = require("mongoose");


// create a schema
const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required: true,
        unique: true,
    },
    redirectURL:{
        type: String,
        required: true,
        unique: false,

    },

    visitHistory:[{timestamp:{

        type: Number
    }}],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false,
    }
    
},
{
timestamps:true

});

const URL = mongoose.model("url", urlSchema)

module.exports = {URL};
