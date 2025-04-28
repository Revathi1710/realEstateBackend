const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PropertySchema=new Schema({
    vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    lookingFor:{type:String},
    kindofProperty:{type:String},
    kindofPropertyDetails:{type:String},
    city:{type:String},
    locality:{type:String},
    bedrooms:{type:String},
    bathrooms:{type:String},
    balconies:{type:String},
    carpetArea:{type:String},
    buildUpArea:{type:String},
    superBuildUpArea:{type:String},
    propertyFloor:{type:String},
    FloorNumber:{type:String},
    availabilityStatus:{type:String},
    ageOfProperty:{type:String},
    propertyVideo:{type:String},
    PropertyImages: [{ type: String }],
    allInclusive:{type:String},
      taxExcluded:{type:String},
      priceNegotiable:{type:String},
      maintenance:{type:String},
      expectedRental:{type:String},
      bookingAmount:{type:String},
      annualDues:{type:String},
      maintancewish:{type:String},
      aboutproperty:{type:String}

}, { timestamps: true })
module.exports = mongoose.model('Property', PropertySchema);