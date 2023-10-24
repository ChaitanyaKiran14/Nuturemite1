const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorName: String,
  vendorEmail: String,
  vendorRating: Number,
});

module.exports = mongoose.model('Vendor', vendorSchema);
