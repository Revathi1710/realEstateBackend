const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnquirySchema = new Schema({
    productname: { type: String, required: true },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    UserNumber: { type: String, required: true },
    Username: { type: String, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    customerId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'},
    productPrice: { type: String, required: true },
    status: { type: String },
    starRate: { type: String },
    Response: { type: String },
    Quality: { type: String },
 
    vendorName:{ type: String, required: true },
    vendorBusinessName: { type: String, required: true },
    vendorNumber: { type: String, required: true },
    Delivery: { type: String },
    image: { type: String }
}, { timestamps: true });  // ✅ Correct placement of timestamps

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

module.exports = Enquiry;
