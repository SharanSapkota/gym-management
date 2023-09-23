import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },    
  description: {
    type: String,
  },
  // Add any additional fields as needed
});

export const Role = mongoose.model('UserRole', roleSchema);
