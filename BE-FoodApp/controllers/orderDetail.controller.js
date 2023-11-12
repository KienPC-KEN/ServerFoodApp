const orderDetail = require('../model/orderDetail.model');
const orderItem = require('../model/orderitem.model');

//[GET]
const getData = async (req, res) => {
      try {
            const data = await orderDetail.find({}).populate({
                  path: 'idOrderItem',
                  populate: [
                        { path: 'idProduct', model: 'product' },
                        { path: 'idCustomer', model: 'customer' },
                  ],
            });
            if (data.length == 0) {
                  res.status(404).json('Data is empty');
            } else {
                  res.status(200).json(data);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

const getDataByIdCustomer = async (req, res) => {
      try {
            const dataOrderItem = await orderItem.find({ idCustomer: req.params.customerId });
            const data = await orderDetail
                  .find({ idOrderItem: { $elemMatch: { $in: dataOrderItem, $exists: true } } })
                  .populate({
                        path: 'idOrderItem',
                        populate: [
                              { path: 'idProduct', model: 'product' },
                              { path: 'idCustomer', model: 'customer' },
                        ],
                  });
            if (data.length === 0) {
                  res.status(404).json('Data not found for this idCustomer');
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
      getDataByIdCustomer,
      createOrderDetail,
      updateOrderDetail,
      deleteOrderDetail,
};
