const express = require("express");
const { MakePassWordHased } = require("../middlewares/Auth");
const { LoginController } = require("../controllers/loginController");
const VerifyUser = require("../middlewares/IsUserExist");
const LoginRouter = express.Router();


LoginRouter.get("/login",VerifyUser,MakePassWordHased,LoginController)

module.exports = LoginRouter;