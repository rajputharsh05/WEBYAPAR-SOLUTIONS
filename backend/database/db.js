
const mongoose = require("mongoose")

const DATABASE_URL = "mongodb+srv://hs7992476139:KOSgem8tijMk0Nws@cluster0.whwoemb.mongodb.net/?retryWrites=true&w=majority";

const ConnectToDataBase  = async ()=>{

    try{
        await mongoose.connect(DATABASE_URL).then(()=>{
            console.log("connect to db")
        })
    }catch(error){
        console.log(error);
    }
}

module.exports = ConnectToDataBase;




//const uri =  "mongodb+srv://hs7992476139:@Harsh12345@cluster0.9ec6bjk.mongodb.net/?retryWrites=true&w=majority";
//mongodb+srv://hs7992476139:@Harsh12345@cluster0.whwoemb.mongodb.net/?retryWrites=true&w=majority