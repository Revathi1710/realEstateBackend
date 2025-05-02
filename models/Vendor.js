const mongoose = require('mongoose');
const slugify = require('slugify');

const VendorSchema = new mongoose.Schema({
    fname: String,
    email: { type: String, unique: true },
    number: { type: String, unique: true },
    isBuilder: Boolean,
    businessName: String,
    lname: String,
    alterEmail: String,
    alterNumber: String,
    whatsappNumber: String,
    jobTitle: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    businessSlug: { type: String, unique: true },
    approved: { type: Boolean, default: false },  // Added approval status
    OfficeContact: String,
    FaxNumber: String,
    Ownership: String,
    AnnualTakeover: String,
    establishment: String,
    NoEmployee: String,
    selectType: String,
    Address: String,
    City: String,
    State: String,
    Country: String,
    Pincode: String
}, { timestamps: true, collection: 'vendor' });



module.exports = mongoose.model('Vendor', VendorSchema);
