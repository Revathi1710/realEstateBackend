const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection String for humanhair database
const mongourl = process.env.MONGO_URL || "mongodb+srv://revathid:multivendor@cluster0.vfhbzr2.mongodb.net/humanhair?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected to humanhair database'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Define Schema and Model for Customer
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
});

// Creating Customer model from Schema
const Customer = mongoose.model('Customer', customerSchema);

// Middleware to parse JSON
app.use(express.json());

// Route to fetch all customer data
app.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find().lean(); // Using lean() for plain JS object
        console.log("Customer Data:", customers); // Logs customer data in the console
        res.json(customers); // Send response back to the client
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).json({ message: 'Error fetching customers' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


