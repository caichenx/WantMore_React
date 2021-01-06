import React from "react";
import ItemQuantity from "./ItemQuantity";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  let totals = 0;
  const displayCart = () => {
    const renderedItems = cart.map((item) => {
      totals += 13 * item.quantity;
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-3">
              <img
                src={item.product.urls.thumb}
                alt={item.product.alt_description}
                className="img-thumbnail"
                style={{ height: "140px", width: "200px" }}
              />
            </div>
            <div className="col-md-4">
              <h4>{item.product.alt_description}</h4>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.product)}
              >
                Remove
              </button>
            </div>
            <ItemQuantity
              currentItem={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
            <div className="col-md-2">{`AU$ ${13 * item.quantity}`}</div>
          </div>
          <hr />
        </React.Fragment>
      );
    });
    return <React.Fragment>{renderedItems}</React.Fragment>;
  };

  return (
    <div className="container">
      <h4 id="num-of-item">{`${cart.length} ITEM(S) IN YOUR CART`}</h4>
      <hr />
      {displayCart()}
      <h3>{`TOTAL: $AU ${totals}.00`}</h3>
      <button className="btn btn-success" disabled>
        CHECKOUT
      </button>
      <button className="btn btn-success">CONTINUE</button>
    </div>
  );
};

export default Cart;
