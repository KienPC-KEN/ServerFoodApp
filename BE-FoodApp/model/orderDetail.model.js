const mongoose = require('mongoose');

const orderDetail = new mongoose.Schema(
      {
            name: { type: String, required: true },
            status: { type: String, default: 'Pending' },
            totalPrice: { type: Number, required: true },
            idOrderItem: { type: mongoose.Types.ObjectId, ref: 'orderItem', required: true },
      },
      { timestamps: true }
);

module.exports = mongoose.model('order_detail', orderDetail);
