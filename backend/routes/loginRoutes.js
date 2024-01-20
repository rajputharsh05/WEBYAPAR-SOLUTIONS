const express = require("express");
const { MakePassWordHased } = require("../middlewares/Auth");
const { LoginController } = require("../controllers/loginController");
const LoginRouter = express.Router();


LoginRouter.get("/login",MakePassWordHased,LoginController)

module.exports = LoginRouter;