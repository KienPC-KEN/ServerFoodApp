const orderDetail = require('../model/orderDetail.model');

//[GET]
const getData = async (req, res) => {
      try {
            const data = await orderDetail.find({}).populate('idOrderItem');
            if (data.length == 0) {
                  res.status(404).json('Data is empty');
            } else {
                  res.status(200).json(data);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};


//[POST]
const createOrderDetail = async (req, res) => {
      try {
            if (!req.body) {
                  res.status(404).json('Dữ liệu không được để trống');
            } else {
                  const newOrderDetail = await orderDetail({ ...req.body }).save();
                  res.status(200).json(newOrderDetail);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};
//[PUT]
const updateOrderDetail = async (req, res) => {
      try {
            if (!req.body) {
                  res.status(404).json('Dữ liệu không được để trống');
            } else {
                  const newOrderDetail = await orderDetail.findByIdAndUpdate(
                        { _id: req.params.id },
                        { ...req.body },
                        { new: true, upsert: true }
                  );
                  res.status(200).json(newOrderDetail);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

//[Delete]
const deleteOrderDetail = async (req, res) => {
      try {
            await orderDetail.deleteOne({ _id: req.params.id });
            res.status(200).json('Delete completed!');
      } catch (error) {
            res.status(500).json(error);
      }
};


module.exports = {
      getData,
      createOrderDetail,
      updateOrderDetail,
      deleteOrderDetail
};