const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  Pricerange: { type: String, required: true },
  image: { type: String }, // Image field remains optional
  active: { type: Boolean, default: true },
  category: { type: String, required: true } // Category field is required
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema); // Export as 'Service'
