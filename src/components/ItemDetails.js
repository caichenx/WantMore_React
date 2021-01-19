import React from "react";

const ItemDetails = ({ selectedProduct, addToCart }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <img
            src={selectedProduct.image.regular}
            alt="Chrismas"
            className="img-thumbnail"
            style={{ width: "100%", height: "90%" }}
          />
        </div>
        <div className="col-sm-12 col-md-5">
          <h2>{selectedProduct.name}</h2>
          <h2>{`AU$${selectedProduct.price}`}</h2>
          <p>
            Seller GST included(where applicable).Additional GST may be applied
            by WantMore at checkout
          </p>
          <div className="d-grid col-10 mx-left">
            <button
              className="btn btn-success"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
