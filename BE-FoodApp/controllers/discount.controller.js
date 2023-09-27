const discount = require('../model/discount.model');

//[GET]
const getDiscount = async (req, res) => {
      try {
            const data = await discount.find({});
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
const createDiscount = async (req, res) => {
      try {
            if(!req.body) {
                  res.status(404).json('Dữ liệu không được để trống');
            } else {
                  const newDiscount = await discount({ ...req.body}).save();
                  res.status(200).json(newDiscount);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

//[PUT]
const updateDiscount = async (req, res) => {
      try {
      } catch (error) {}
};

//[DEL]
const deleteDiscount = async (req, res) => {
      try {
      } catch (error) {}
};

module.exports = {
      getDiscount,
      createDiscount,
      updateDiscount,
      deleteDiscount,
};
