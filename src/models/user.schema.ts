import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // User profile information
  fullName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },

  // Gym-related fields
  membershipType: {
    
  },
  membershipStartDate: {
    type: Date,
  },
  membershipEndDate: {
    type: Date,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserRole',
    required: true,
  },
  isActiveMember: {
    type: Boolean,
    default: true,
  },
  isUser: {
    type: Boolean,
    default: true,
  },
});

export const User = mongoose.model('User', userSchema);

