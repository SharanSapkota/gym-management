
import mongoose from 'mongoose'
const salarySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
    },
    salaryAmount: Number,  // Monthly salary amount
    currency: String,      // Currency (e.g., USD)
    effectiveDate: Date,  // Date when the salary is effective
    // Other salary-related fields
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary
