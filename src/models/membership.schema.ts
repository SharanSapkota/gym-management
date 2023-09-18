import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ageGroup: {
    type: String,
    required: false
  },
  durationMonths: {
    type: Number,
    required: true,
  },
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;