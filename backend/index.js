const express = require("express");
const app = express();
const port = 3100;
const cors = require("cors");
const bodyParser = require("body-parser");
const authroute = require("./view/routers/auth");
const productroute = require("./view/routers/products");
const mysql = require("mysql2");
const path = require("path");
const dotenv = require('dotenv');

const connectionDB = require("../backend/view/config/db");
dotenv.config({ path: './.env'});

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('../uploads'));

//routes
app.use("/api", authroute);
app.use("/product", productroute);


app.listen(port, (req, res) => {
  console.log(`click here http://localhost:${port},`);
});
