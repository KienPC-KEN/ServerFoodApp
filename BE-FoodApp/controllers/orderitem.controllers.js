const OrderItemModel = require('../model/orderitem.model');

exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItemModel.find()
            .populate('idProduct')
            .populate({
                path: 'idCustomer',
                model: 'customer',
                select: 'name phone email address', // Chọn các trường bạn muốn hiển thị từ mô hình Customer
                populate: {
                    path: 'idUser',
                    model: 'user',
                    select: 'name phone email address', // Chọn các trường bạn muốn hiển thị từ mô hình User
                },
            });

        res.json(orderItems);
    } catch (error) {
        res.status(500).json({ error: 'Không thể lấy danh sách OrderItem' });
    }
};

// Thêm một OrderItem mới
exports.createOrderItem = async (req, res) => {
  const { idProduct, idCustomer, quantity } = req.body;

  try {
    const newOrderItem = new OrderItemModel({
      idProduct,
      idCustomer,
      quantity,
    });

    const savedOrderItem = await newOrderItem.save();
    res.status(201).json(savedOrderItem);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo OrderItem mới' });
  }
};

// Sửa thông tin của một OrderItem
exports.updateOrderItem = async (req, res) => {
  const { id } = req.params;
  const { idProduct, idCustomer, quantity } = req.body;

  try {
    const updatedOrderItem = await OrderItemModel.findByIdAndUpdate(
      id,
      {
        idProduct,
        idCustomer,
        quantity,
      },
      { new: true }
    );

    if (!updatedOrderItem) {
      return res.status(404).json({ error: 'Không tìm thấy OrderItem' });
    }

    res.json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ error: 'Không thể cập nhật OrderItem' });
  }
};

// Xóa một OrderItem
exports.deleteOrderItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrderItem = await OrderItemModel.findByIdAndRemove(id);

    if (!deletedOrderItem) {
      return res.status(404).json({ error: 'Không tìm thấy OrderItem' });
    }

    res.json({ message: 'OrderItem đã được xóa' });
  } catch (error) {
    res.status(500).json({ error: 'Không thể xóa OrderItem' });
  }
};

