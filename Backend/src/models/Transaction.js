const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  transactionDate: Date,
  transactionAmount: Number,
  buyerName: String,
  buyerEmail: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
