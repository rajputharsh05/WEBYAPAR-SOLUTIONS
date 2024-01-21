const memberModel = require("../models/MemberModel");


const LoginController =  async (req,res) => {
    
    const { token , password } = req.body;
    const { id } = req.query;
    

    try{

        if(req.body.isThere === true)
        {
            
            res.cookie("JWT",token);

            res.json("User is already there");
    
        }else{    

            
            const NewMember = new memberModel({
                id,
                password,
            })
            
            await NewMember.save();

            res.cookie("JWT",token);
            
            res.status(200).json("user save");
            
        }
    }catch(error){

        res.status(400).json("Enternal Error")
                 
    }
    
}


module.exports = {
    LoginController,
}





