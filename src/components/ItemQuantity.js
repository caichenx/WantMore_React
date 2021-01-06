import React from "react";
import "./ItemQuantity.css";

const ItemQuantity = ({ currentItem, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="col-md-2">
      <button
        className="bi bi-minus"
        onClick={() => decreaseQuantity(currentItem.product)}
      >
        -
      </button>
      <span className="item-quantity-indicator">{currentItem.quantity}</span>
      <button
        className="bi bi-plus"
        onClick={() => increaseQuantity(currentItem.product)}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
