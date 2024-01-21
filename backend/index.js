const express = require("express")
const bodyparser = require("body-parser");
const cors = require("cors");
const ConnectToDataBase = require("./database/db");
const LoginRouter = require("./routes/loginRoutes");
const server = express();


server.use(cors({ 
    credentials: true ,
    origin : "http://127.0.0.1:5500/"
}));
server.use(bodyparser.urlencoded({ extended: false }))
server.use(bodyparser.json());
server.use(LoginRouter)
const PORT = 4000;



server.listen(PORT,() => {
    console.log("Server Is Running !");
    ConnectToDataBase();
} )