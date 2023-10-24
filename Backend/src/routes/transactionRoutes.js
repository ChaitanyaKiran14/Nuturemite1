const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

// Get all transactions
router.get('/', transactionController.getAllTransactions);

// Create a new transaction
router.post('/', transactionController.createTransaction);

module.exports = router;
