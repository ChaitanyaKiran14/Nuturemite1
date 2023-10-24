const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productDescription: String,
  productCategory: String,
  productImage: String,
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
});

module.exports = mongoose.model('Product', productSchema);
