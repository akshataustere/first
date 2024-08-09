const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "one",
});

connection.connect((error) => {
  if (error) {
    console.log("not connected to DB");
  } else {
    console.log("Connected to DB");
  }
});

module.exports = connection;
