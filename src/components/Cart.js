import React from "react";
import ItemQuantity from "./ItemQuantity";
import Link from "./Link";
import "./style/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const findIdentical = (cart, item) => {
    //assume identical element doesn't exist
    let identical = null;
    //check all elements in the cart array
    //if identical element found, get its index and assign it to the identical variable
    for (var i in cart) {
      if (cart[i].id === item.id) {
        identical = i;
        break;
      }
    }
    return identical;
  };

  const removeFromCart = (item) => {
    // since state is immutable, create an new array
    const newCart = [...cart];
    // find element in the cart array
    const index = findIdentical(newCart, item);
    // if element exists in the cart array, remove it
    if (index !== null) {
      newCart.splice(index, 1);
      // assign the new array back to the state
      updateCart(newCart);
    }
  };

  const increaseQuantity = (item) => {
    // find the index of the corresponding item
    const index = findIdentical(cart, item);
    // if the index is successfully retrieved, increase its quantity by 1
    if (index !== null) {
      // since state is immutable, create an new array
      const newCart = [...cart];
      newCart[index].quantitySelected += 1;
      // assign the new array back to the state
      updateCart(newCart);
    }
  };

  const decreaseQuantity = (item) => {
    // find the index of the corresponding item
    const index = findIdentical(cart, item);
    // if the index is successfully retrieved, decrease its quantity by 1
    if (index !== null) {
      // since state is immutable, create an new array
      const newCart = [...cart];
      // if the current quantity is 1, decreasing the quantity of the item will remove the item from the cart
      if (newCart[index].quantitySelected - 1 === 0) {
        removeFromCart(item);
      } else {
        newCart[index].quantitySelected -= 1;
        // assign the new array back to the state
        updateCart(newCart);
      }
    }
  };

  let totals = 0;
  const displayCart = () => {
    const renderedItems = cart.map((item) => {
      totals += item.price * item.quantitySelected;
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-3">
              <img
                src={item.image.thumb}
                alt={item.name}
                className="img-thumbnail"
                style={{ height: "140px", width: "200px" }}
              />
            </div>
            <div className="col-md-4">
              <p className="product-desc">{item.name}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
            <ItemQuantity
              currentItem={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
            <div className="col-md-2">{`AU$ ${
              item.price * item.quantitySelected
            }`}</div>
          </div>
          <hr />
        </React.Fragment>
      );
    });
    return <React.Fragment>{renderedItems}</React.Fragment>;
  };

  return (
    <div className="container">
      {cart.length !== 0 ? (
        <h4 id="num-of-item">{`${cart.length} ITEM(S) IN YOUR CART`}</h4>
      ) : (
        <h4>YOUR SHOPPING CART IS EMPTY</h4>
      )}
      {displayCart()}
      <h3>{`TOTAL: $AU ${totals}.00`}</h3>
      <button className="btn btn-success btn-checkout" disabled>
        CHECKOUT
      </button>
      <Link href="/marketplace">
        <button className="btn btn-success btn-continue">CONTINUE</button>
      </Link>
    </div>
  );
};

export default Cart;
