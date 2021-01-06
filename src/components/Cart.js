import React from "react";
import ItemQuantity from "./ItemQuantity";

/* Challenges to manipulate the state of cart
1. Idea: anything that is relavent to cart manipulation should be included in the Cart component
2. "add to cart" button is placed in the ItemDetail component, which doesn't have access to Cart componet. therefore, item that is added to the cart is passed back to the App component, then pass to the Cart component
3. when Cart component receive the props, where to put addToCart function so that the props can be added to the state of cart
 */

/*
  1. when the component is mounted, if the argument 'itemAddToCart' is not null, add the value to the Cart state
  2. whenever the 'itemAddToCart' is updated, call  addToCart function
  */

/* IMPORTANT
  componentDidUpdate() {
    if (this.props.itemAddToCart) {
      this.addToCart(this.props.itemAddToCart);
    }
  }

  the code above will cause an infinite loop, because calling addToCart will change the Cart state, which will cause the component to re-render. the rendering will trigger the componentDidUpdate function, then the addToCart will be called again. the process goes on and cause an infinite loop. 
  */

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  // componentWillUnmount() {
  //   console.log("component unmounted");
  // }

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

/* PAST CODE

updateCart.map((itemInCart) => {
  if (itemInCart[0].id === newItem.id) {
    let index = updateCart.indexOf(itemInCart);
    updateCart[index][1] += 1;
    identicalItem = true;
    return null;
  }
});

 */
