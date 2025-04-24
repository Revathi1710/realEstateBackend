const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorizontalTowerbannerSchema = new Schema({
    name: { type: String },
    URL: { type: String },
    image: { type: String }, // Image field remains optional
  }, { timestamps: true });
  
  module.exports = mongoose.model('HorizontalTowerbanner', HorizontalTowerbannerSchema);
  

module.exports = mongoose.model('HorizontalTowerbanner', HorizontalTowerbannerSchema); // Export as 'Service'