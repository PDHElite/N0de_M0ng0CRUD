const {matchedData} = require("express-validator");
const {tokenSign} = require("../utils/handleJWT")
const {userModel} = require("../models")
const {encrypt,compare} = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");

const registerCtrl = async (req,res) => {
try {
    req = matchedData(req);
const passwordHash = await encrypt(req.password)
const body = {...req,password:passwordHash}
const dataUser = await userModel.create(body)
dataUser.set('password',undefined,{strict:false})

const data ={
    token: await tokenSign(dataUser),
    user:dataUser
}

res.send({data})
} catch (e) {
    handleHttpError(res,"error de autenticacion")
}
}

const loginCtrl = async (req,res) =>{
    try {
        req = matchedData(req);
        const user = await userModel.findOne({email:req.email});
        if(!user){
            handleHttpError(res,"no existe el usuario",404)
            return
        }

        const hashPassword = user.get('password');
        const check = await compare(req.password,hashPassword)

        if(!check){
            handleHttpError(res,"password invalido",401);
            return
        }

        user.set('password',undefined,{strict:false})

        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({data})
        
    } catch (e) {
        handleHttpError(res,"Error_login")
    }
}


module.exports = {loginCtrl,registerCtrl}