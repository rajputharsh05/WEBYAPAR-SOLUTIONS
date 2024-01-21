const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const salt = 10;
const JWTSECRET = "@Harsh12345"

const MakePassWordHased = async (req,res,next) => {

    try{

        const { password , id } = req.query;

        const payload = {

            userID : id,

            isAdmin : req.body.isAdmin,

        }

        if(req.body.isThere === false)
        {
  
            const HasedPassword = await bcrypt.hash(password,salt);

            req.body.password = HasedPassword;

            const token = JWT.sign(payload,JWTSECRET);
            

            req.body.token = token;
    
            next();

        }else{
             
            const passwordfromdtabase = req.body.DBpass;

            const isMatch = await bcrypt.compare(password,passwordfromdtabase);

            if(isMatch){
                
                const token = JWT.sign(payload,JWTSECRET);
                
                req.body.token = token;

                next();

            }else{

                res.status(401).json("User Had Provided Wrong Detials");
                
            }
        }
    }catch(error)
    {

        res.json(error);

    }
}

module.exports = {
    MakePassWordHased,
}