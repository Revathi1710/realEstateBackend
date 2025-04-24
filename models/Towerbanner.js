const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TowerbannerSchema = new Schema({
    name: { type: String },
    URL: { type: String },
    image: { type: String }, // Image field remains optional
  }, { timestamps: true });
  
  module.exports = mongoose.model('Towerbanner', TowerbannerSchema);
  

module.exports = mongoose.model('Towerbanner', TowerbannerSchema); // Export as 'Service'