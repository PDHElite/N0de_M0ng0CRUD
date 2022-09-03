const express = require("express");
const { createItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const router = express.Router();

router.get('/', getItems);

//getItem
router.get('/:id', validatorGetItem, getItem);

//createItem
router.post('/',uploadMiddleware.single("myfile"),createItem);

//deleteItem
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router; 