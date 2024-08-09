import React, { useState } from "react";

function AddProduct(props) {

  const [file, setFile] = useState();


  const onHandleFile = (e) => {
    setFile(e.target.files[0])
  }


  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {

    } catch (error) {

    }

  }





  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-5">
          <form
            className="form-control mt-5"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2022/09/15/06/14/pattern-7455773_1280.png')",
            }}
          >
            <h3 className="text-center mt-5">Enter Product Details</h3>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                className="form-control"
                id="productName"
                name="name"
                type="text"
                placeholder="Enter Product"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Description</label>
              <input
                className="form-control"
                id="productDescription"
                type="text"
                name="description"
                placeholder="Enter Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Price</label>
              <input
                className="form-control"
                id="productPrice"
                type="number"
                name="price"
                placeholder="Enter Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productImage">Product Image</label>
              <input className="form-control" id="productImage" type="file" formEncType="multipart"
                name="image"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
