const express = require("express");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader");
const { checkRol } = require("../middleware/rol");
const { authMiddleware } = require("../middleware/sesion");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

router.get("/",authMiddleware,getItems);

router.get("/:id",authMiddleware,validatorGetItem,getItem);

router.put("/:id",authMiddleware,validatorGetItem,validatorCreateItem,updateItem);

router.post("/",authMiddleware,checkRol(["admin" , "user"]),validatorCreateItem,createItem);

router.delete("/:id",authMiddleware,validatorGetItem,deleteItem);

module.exports = router ;
