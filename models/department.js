const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    duties: String,
    startDate: { type: Date, required: true },
    deptHead: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
