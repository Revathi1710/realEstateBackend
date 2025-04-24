const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  MainCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Maincategory', required: true },
  
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  active: { type: Boolean, required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  image: { type: String, required: false }, // Set to false if not required
});


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
