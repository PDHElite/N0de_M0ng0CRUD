const express = require("express");
const { loginCtrl } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router();

router.post("/register",validatorRegister,loginCtrl)
module.exports = router ;
 