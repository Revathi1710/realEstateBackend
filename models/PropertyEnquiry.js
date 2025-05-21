const mongoose = require('mongoose');

const PropertyEnquirySchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  customername: String,
  customerIdNumber: String,
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  ownerName: String,
  ownerNumber: String,
  status: String // Make sure you have this field
}, { timestamps: true });

module.exports = mongoose.model('PropertyEnquiry', PropertyEnquirySchema);
