const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// import our routes
const auth = require('./src/routes/authentication')();
const product = require('./src/routes/product')();
const order = require('./src/routes/order')();
const discount = require('./src/routes/discount')();
const productCategory = require('./src/routes/productCategory')();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', auth);
app.use('/api/product', product);
app.use('/api/order', order);
app.use('/api/discount', discount);
app.use('/api/category', productCategory);



app.get('/', (req, res) => {
  res.send('Hello world');
});


app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
