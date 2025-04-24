const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
   type: { type: String , required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
 

});

const BusinessTypeVendor = mongoose.model('BusinessType', BusinessSchema );

module.exports =BusinessTypeVendor;

