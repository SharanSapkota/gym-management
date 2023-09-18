import mongoose from 'mongoose'
const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  condition: {
    type: String,
    enum: ['Excellent', 'Good', 'Fair', 'Poor'],
    default: 'Good',
  },
  // Add any additional fields as needed
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
