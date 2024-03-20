import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  memberID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FitnessClass',
    required: true,
  },
  checkInTime: {
    type: Date,
    required: true,
  },
  checkOutTime: {
    type: Date,
  },
  date: {
    type: Date,
    required: true,
  },
  // Add any additional fields as needed
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);

