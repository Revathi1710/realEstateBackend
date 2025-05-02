const mongoose = require('mongoose');

const PropertyEnquirySchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  customername: String,
  customerIdNumber: String,
  property_id: String,
  ownerId: String,
  ownerName: String,
  ownerNumber: String
});

module.exports = mongoose.model('PropertyEnquiry', PropertyEnquirySchema);
