const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Get all products
router.get('/', productController.getAllProducts);

// Create a new product
router.post('/', productController.createProduct);

module.exports = router;
