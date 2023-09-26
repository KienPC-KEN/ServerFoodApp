const product = require('../model/product.model');

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
                  res.status(200).json(newProduct);
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
                  const newProduct = await product.findByIdAndUpdate(
                        { _id: req.params.id },
                        { ...req.body },
                        { new: true, upsert: true }
                  );
                  res.status(200).json(newProduct);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

//[Delete]
const deleteProduct = async (req, res) => {
      try {
            await product.deleteOne({ _id: req.params.id });
            res.status(200).json('Delete completed!');
      } catch (error) {
            res.status(500).json(error);
      }
};

const search = async (req, res) => {
      try {
            const name_search = req.query.q;
            
      } catch (error) {
            res.status(500).json(error);
      }
};

module.exports = {
      getProduct,
      createProduct,
      updateProduct,
      deleteProduct,
      search,
};
