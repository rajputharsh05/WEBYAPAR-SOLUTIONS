const memberModel = require("../models/MemberModel");
const JWT = require("jsonwebtoken")
const JWTSECRET = "@Harsh12345";


const LoginController =  async (req,res) => {
    
    const { password } = req.body;
    const { id } = req.query;
    

    try{

        const payload = {
            id : id,
            isAdmin : req.body.isAdmin,
        }

        const token = JWT.sign(payload,JWTSECRET);

        res.cookie("JWT",token,{
            maxAge: 3600000,
            sameSite: 'None',
        });

        if(req.body.isThere === true)
        {
            
            console.log(res.getHeaders());  
            res.status(200).json("User is already there");
            
        }else{    
            
            const NewMember = new memberModel({
                id,
                password,
            })
            
            await NewMember.save();
            
            console.log(res.getHeaders());  

            res.status(200).json("user save");
            
        }
    } catch(error) {

        res.status(400).json("Enternal Error")
                 
    }
    
}


module.exports = {
    LoginController,
}





