const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor' },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  floorSpace: { type: String, required: true },
  overallSize: { type: String, required: true },
  price: { type: String, required: true },
  noBathroom: { type: String },
  noBedroom: { type: String },
  roomVideo: { type: String },
  TotalFloors:{type: String},
  Overlooking:{type:String},
  PropertyAge:{type:String},
  persquare:{type:String},
  ConstructionStatus:{type:String},
  Typeofproperty:{type:String},
  areaType:{type:String},
  approved: { type: Boolean, default: false },
  image: { type: String },
  galleryimages: [{ type: String }], // ✅ Fixed to array
  active: { type: Boolean, default: true },
  feature: { type: Boolean, default: false },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Maincategory', required: true },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
