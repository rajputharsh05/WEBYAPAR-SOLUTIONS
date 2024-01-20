const memberModel = require("../models/MemberModel");


const LoginController =  async (req,res) => {
    const { id } = req.query;
    const { password } = req.body;
    
    try{

        const isUserPresentInDatabase = memberModel.find({ id });

        if(isUserPresentInDatabase)
        {
              
        }else{    
            const NewMember = new memberModel({
                id,
                password,
            })
            
            await NewMember.save();
            
            res.status(200).json("user save");
            
        }
    }catch(error){

        res.status(400).json("Enternal Error")
                 
    }
    
}


module.exports = {
    LoginController,
}