const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaincategorySchema = new Schema({
  
  name: { type: String, required: true },
  slug: { type: String, required: true },
 
  
 
  image: { type: String },
  active: { type: Boolean, default: true },
 
}, { timestamps: true });

module.exports = mongoose.model('Maincategory', MaincategorySchema);
