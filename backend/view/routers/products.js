const express = require('express');
const Router = express.Router();
const productcontroller = require('../controllers/product');

Router.route('/addproducts').post(productcontroller.addProducts);

module.exports = Router;