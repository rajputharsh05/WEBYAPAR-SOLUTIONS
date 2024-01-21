const bcrypt = require("bcrypt");
const salt = 10;

const MakePassWordHased = async (req,res,next) => {

    try{

        const { password  } = req.query;


        if(req.body.isThere === false)
        {
  
            const HasedPassword = await bcrypt.hash(password,salt);

            req.body.password = HasedPassword;
    
            next();

        }else{
             
            const passwordfromdtabase = req.body.DBpass;

            const isMatch = await bcrypt.compare(password,passwordfromdtabase);

            if(isMatch){
    
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