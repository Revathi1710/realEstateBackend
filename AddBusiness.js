const mongoose = require('mongoose');
const Business = require('./models/Business'); // Adjust the path to your model

const mongourl = process.env.MONGO_URL || 
  "mongodb+srv://revathid883:7QQ2Bq4T5qNNSMYU@cluster0.d215aeh.mongodb.net/humanhair?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  return addBusiness();
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

const addBusiness = async () => {
  try {
    const newBusiness = new Business({ otpEnable: false });
    const saved = await newBusiness.save();
    console.log('Business document added:', saved);
  } catch (error) {
    console.error('Error adding Business:', error);
  } finally {
    mongoose.disconnect();
  }
};
