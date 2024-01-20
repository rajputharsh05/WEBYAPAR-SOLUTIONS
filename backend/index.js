const express = require("express");
const ConnectToDataBase = require("./database/db");
const server = express();

const PORT = 4000;

server.get("/",(req,res) => {
    res.json("Land")
})

server.listen(PORT,() => {
    console.log("Server Is Running !");
    ConnectToDataBase();
} )