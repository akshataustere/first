const con = require("../config/db");

class Products {
  async addProducts(req, res) {
    try {
      const { id, name, description, price, image } = req.body;

      const query = 'INSERT INTO products (id, name, description, price, image) VALUES (?, ?, ?, ?, ?)';

      con.query(query, [id, name, description, price, image], (error, result) => {
        if (error) {
          res.status(500).json({ message: "Internal Server Error" });
        } else {
          res.status(201).json({ message: 'Product created successfully', productId: result.insertId });
        }
      });

    } catch (error) {
      console.error(error);  
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
}

const productController = new Products();
module.exports = productController;
