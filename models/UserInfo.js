const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: String,
    email: { type: String, unique: true },
    number: String,
    password: String,
    cpassword: String
}, { collection: 'UserInfo' });

module.exports = mongoose.model('User', userSchema);
