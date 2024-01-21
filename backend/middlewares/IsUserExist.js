const memberModel = require("../models/MemberModel");


const VerifyUser = async (req,res,next) => {

    try {
    
        const { id } = req.query;
                
        const UserPresentInDataBase = await memberModel.find({ id });

        console.log(UserPresentInDataBase);
        
        if(UserPresentInDataBase.length === 1)
        {

            req.body.isThere = true;
            req.body.DBpass = UserPresentInDataBase[0].password;
            req.body.isAdmin = UserPresentInDataBase[0].isAdmin;

        }else
        {
            req.body.isThere = false;
            req.body.isAdmin = false;
        }
        
        next();

    }catch(error)
    {

        res.status(404).json("User Not Found");
        
    }

}

module.exports = VerifyUser;