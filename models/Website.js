const mongoose = require('mongoose');
const BusinessSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    HomepageKey: String,
    HomepageDescription: String,
    bannerImage:String,
    
    AboutTitle: String,
    AboutImage: String,
    AboutDescription:String,
    AwardsTitle:String,
    AwardsDescription:String,
    AwardsImage:String,
}, { collection: 'WebsiteSetup' });


module.exports = mongoose.model('WebsiteSetup', BusinessSchema);