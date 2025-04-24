const mongoose = require('mongoose');
const BusinessSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    companyname: String,
    OfficeContact: String,
    FaxNumber: String,
    Ownership: String,
    AnnualTakeover: String,
    establishment: String, // Add this field if needed
    NoEmployee: String,
    Address: String,
    City: String,
    State: String,
    pincode: String,
    country: String
}, { collection: 'Business' });


module.exports = mongoose.model('BusinessDetails', BusinessSchema);