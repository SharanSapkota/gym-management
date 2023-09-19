import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    hireDate: Date,    // Date of hire
    position: String,
    department: String, // Employee department
    isActive: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;