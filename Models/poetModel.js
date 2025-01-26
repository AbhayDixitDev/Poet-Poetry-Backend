const mongoose = require('mongoose')

const PoetSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"Visitor"}],
    avatar:String,
    poems:[{type:mongoose.Schema.Types.ObjectId,ref:"Poem"}
        
    ]
})

module.exports = mongoose.model("Poet",PoetSchema)