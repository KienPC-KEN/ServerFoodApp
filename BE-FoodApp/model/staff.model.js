const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    role: { type: String, required: true },
});

const StaffModel = mongoose.model('staff', StaffSchema);

module.exports = StaffModel;