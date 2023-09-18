import mongoose from 'mongoose';
const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const FitnessProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  schedule: {
    dayOfWeek: {
      type: String,
      enum: DAYS_OF_WEEK,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  durationMinutes: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
    default: 10, // Default capacity
  },
  // Add any additional fields as needed
});

const FitnessClass = mongoose.model('FitnessClass', FitnessProgramSchema);

module.exports = FitnessClass;
