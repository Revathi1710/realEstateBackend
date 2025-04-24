const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  planPrice: { type: String, required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'plans', required: true },
  paymentId: { type: String },
});

const PlanselectVendor = mongoose.model('PlanselectVendor', planSchema);

module.exports =PlanselectVendor;

