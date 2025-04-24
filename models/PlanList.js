const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  planName: { type: String, required: true },
  planType: { type: String, required: true },
  planPrice: { type: String, required: true },
  planList: { type: [String], required: true }, // Array of strings
  active: { type: Boolean, required: true }
});

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
