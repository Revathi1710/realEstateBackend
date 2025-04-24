const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadFormSchema = new Schema({
  name: { type: String, required: true },
  company_name: { type: String, required: true },
  email: { type: String, required: true },
  data_source: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('LeadForm', LeadFormSchema);
