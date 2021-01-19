import React from "react";
import "./style/ItemQuantity.css";

const ItemQuantity = ({ currentItem, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="col-md-2">
      <button
        className="bi bi-minus"
        onClick={() => decreaseQuantity(currentItem)}
      >
        -
      </button>
      <span className="item-quantity-indicator">
        {currentItem.quantitySelected}
      </span>
      <button
        className="bi bi-plus"
        onClick={() => increaseQuantity(currentItem)}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
