const mongoose = require('mongoose');

const BusinessSettingSchema = new mongoose.Schema({
  otpEnable: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('BusinessSetting', BusinessSettingSchema);
