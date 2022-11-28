const express = require('express');
const router = express.Router()

const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")





router.post("/register", userController.createuser)

router.post("/login", userController.loginuser)

router.post("/books",bookController.createBooks)

router.get("/books",bookController.getBooks)

module.exports=router