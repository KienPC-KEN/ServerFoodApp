const mongoose = require('mongoose');

const orderDetail = new mongoose.Schema(
      {
            name: { type: String, required: true },
            status: { type: String, default: 'Pending' },
            totalPrice: { type: Number, required: true },
            idOrder: { type: mongoose.Types.ObjectId, ref: 'orderItem' },
      },
      { timestamps: true }
);

module.exports = mongoose.model('order_detail', orderDetail);
