const Vendor = require('../models/Vendor');

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(400).json({ error: `Error: ${err}` });
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.json(vendor);
  } catch (err) {
    res.status(400).json({ error: `Error: ${err}` });
  }
};
