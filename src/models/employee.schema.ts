import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    hireDate: Date,
    position: String,
    department: String,
    isActive: Boolean
});

export const Employee = mongoose.model('Employee', employeeSchema);
