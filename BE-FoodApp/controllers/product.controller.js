const product = require('../model/product.model');
const category = require('../model/category.model');

//[GET]
const getProduct = async (req, res) => {
      try {
            const listProduct = await product.find({}).populate('idCategory', 'idDiscount');
            if (listProduct.length == 0) {
                  res.status(404).json('Data is empty');
            } else {
                  res.status(200).json(listProduct);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

//[POST]
const createProduct = async (req, res) => {
      try {
            if (!req.body) {
                  res.status(404).json('Dữ liệu không được để trống');
            } else {
                  const newProduct = await product({ ...req.body }).save();
                  res.status(202).json(newProduct);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

//[PUT]
const updateProduct = async (req, res) => {
      try {
            if (!req.body) {
                  res.status(404).json('Dữ liệu không được để trống');
            } else {
                const idCategory = req.body.idCategory;
                const getCategory = await category.findById({idCategory});
                if(!getCategory) {
                    res.status(404).json('Category is not found');
                }
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

module.exports = {
      getProduct,
      createProduct,
};
