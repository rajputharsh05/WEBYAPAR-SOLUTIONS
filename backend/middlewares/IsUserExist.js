const memberModel = require("../models/MemberModel");


const VerifyUser = (req,res,next) => {

    try {
    
        const { id } = req.query;
                
        const UserPresentInDataBase = memberModel.find({ id });

        
        if(UserPresentInDataBase)
        {

            req.body.isThere = true;
            req.body.DBpass = UserPresentInDataBase.password;
            req.body.isAdmin = UserPresentInDataBase.isAdmin;

        }else
        {
            req.body.isThere = false;
            req.body.isAdmin = UserPresentInDataBase.isAdmin;
        }
        
        next();

    }catch(error)
    {

        res.status(404).json("User Not Found");
        
    }

}

module.exports = VerifyUser;