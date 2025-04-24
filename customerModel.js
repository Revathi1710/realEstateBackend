const mongoose = require('mongoose');

// Define Customer Schema
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

// Create Customer Model
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
