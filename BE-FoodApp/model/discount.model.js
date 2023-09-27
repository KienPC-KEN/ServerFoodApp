const mongoose = require('mongoose');

const discount = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    discountPerson: { type: Number, required: true },
    dateStart: { type: Date, default: Date.now()},
    dateEnd: { type: Date, required: true},
});

module.exports = mongoose.model('discount', discount);