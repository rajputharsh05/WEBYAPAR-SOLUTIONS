const express = require("express")
const server = express();

const PORT = 4000;

server.get("/",(req,res) => {
    res.json("Land")
})

server.listen(PORT,() => {
    console.log("Server Is Running !");
} )