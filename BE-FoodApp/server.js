const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const categoryRoute = require('./router/category.router');
const productRouter = require('./router/product.router');
      
const staffRouter = require('./router/staff.router');

const app = express();

const uri = 'mongodb+srv://phungchikien196:Qa4168ciXnRnjV9G@apppolylib.5gjczzc.mongodb.net/FoodApp';
try {
      mongoose.connect(uri);
      console.log('Connect successfully!');
} catch (error) {
      console.log('Connect error!!!');
}

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/image', express.static('image'));
app.use(bodyParser.json());

app.use('/api/category', categoryRoute);
app.use('/api', productRouter);
app.use('/api', staffRouter)


app.get('/', (req, res) => {
      res.redirect('/api');
});

app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
});
module.exports = app;
