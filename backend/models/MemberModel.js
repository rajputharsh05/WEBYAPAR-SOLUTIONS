
const mongoose = require("mongoose")

const MemberModel = mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique : true,
    },
    isAdmin : {
        type : Boolean,
        required : false,
        default : false,
    },
    image : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "image",
        required : false,
    } ,
    name : {
        type : String,
        required : false,
    },
    password : {
        type : String,
        required : true,
    },
    Approved : {
        type : Boolean,
        default : false
    }
})

const memberModel = mongoose.model("member",MemberModel);

module.exports = memberModel;