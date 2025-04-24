const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the SubCategory schema
const SubCategorySchema = new Schema({
  Category: { type: Schema.Types.ObjectId, ref: 'Category' }, // Reference to Category model
  name: String,
  slug: String,
  image: String,
  active: Boolean,
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
