const product = require('../model/product.model');

//[GET]
const getData = async (req, res) => {
      try {
            const listProduct = await product.find({}).populate('category', 'discount');
            if (listProduct.length == 0) {
                  res.status(404).json('Data is empty');
            } else {
                  res.status(200).json(listProduct);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

module.exports = {
      getData,
};
