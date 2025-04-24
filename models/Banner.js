const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    name: { type: String },
    URL: { type: String },
    image: { type: String }, // Image field remains optional
  }, { timestamps: true });
  
  module.exports = mongoose.model('Banner', BannerSchema);
  

module.exports = mongoose.model('Banner', BannerSchema); // Export as 'Service'
