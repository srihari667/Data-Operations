const mongoose = require('mongoose');

const payoutSchema = new mongoose.Schema({
    payoutDate: { type: Date, required: true },
    fixedAmount: { type: Number, required: true },
    variableAmount: Number,
    deductions: Number
});

const Payout = mongoose.model('Payout', payoutSchema);

module.exports = Payout;
