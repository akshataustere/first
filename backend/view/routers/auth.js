const express = require("express");
const Router = express.Router();
const authcontroller = require('../controllers/auth');
const productcontroller = require('../controllers/product');
const auth = require("../controllers/auth");
const { authenticationToken, authenticateToken } = require("../middlewares/auth");

// Home route
Router.route("/home").get((req, res) => {
  res.status(200).json({ message: "I am Homepage" });
});

// Register route
Router.route('/register').post(authcontroller.Register);

//login route
Router.route('/login').post(authcontroller.Login);

Router.route('/forget-password').post(authcontroller.ForgotPassword);

Router.route('/reset-password').post(authcontroller.ResetPassword);


module.exports = Router;
