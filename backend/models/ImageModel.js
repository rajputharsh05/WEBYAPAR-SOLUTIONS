const mongoose = require("mongoose")

const ImageModel = mongoose.Schema({
    filename : String,
    contentType : String,
    uploadDate : {type : Date , default : Date.now},
    title : String,
})

const imageModel = mongoose.model("image",ImageModel);

module.exports = imageModel;