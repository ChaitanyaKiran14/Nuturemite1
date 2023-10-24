const express = require('express');
const vendorController = require('../controllers/vendorController');

const router = express.Router();

// Get all vendors
router.get('/', vendorController.getAllVendors);

// Create a new vendor
router.post('/', vendorController.createVendor);

module.exports = router;
