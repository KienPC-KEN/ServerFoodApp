const product = require('../model/product.model');

//[GET]
const getData = async (req, res) => {
      try {
            const listProduct = await product.find({}).populate('category', 'discount');
            if (!listProduct) {
                  res.status(404).json('Data not found');
            } else {
                  res.status(202).json(listProduct);
            }
      } catch (error) {
            res.status(500).json(error);
      }
};

module.exports = {
      getData,
};
