const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
    name: { type: String },
    URL: { type: String },
    image: { type: String }, // Image field remains optional
  }, { timestamps: true });
  
  module.exports = mongoose.model('Slider', SliderSchema);
  

module.exports = mongoose.model('Slider', SliderSchema); // Export as 'Service'
