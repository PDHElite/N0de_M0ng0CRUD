const express = require("express");
const router = express.Router();
const { getItems, createItem,getItem,updateItem,deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');

router.get("/",getItems);

//getItem
router.get('/:id', validatorGetItem, getItem);

router.post("/",validatorCreateItem, createItem);

router.put('/:id',validatorGetItem, validatorCreateItem, updateItem);

router.delete('/:id', validatorGetItem, deleteItem);



module.exports = router ;
