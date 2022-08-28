const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require('../validators/storage');
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/storage');

router.get('/', getItems);

//getItem
router.get('/:id', validatorGetItem, getItem);

//createItem
router.post('/', uploadMiddleware.single('myfile'), createItem); //single | multi

//deleteItem
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router; 