import React from "react";
import SingleItemTile from "./SingleItemTile";

const Marketplace = ({ products, onProductClick }) => {
  const renderedProducts = products.map((product) => {
    return <SingleItemTile product={product} onProductClick={onProductClick} />;
  });

  return (
    <div className="container">
      <div className="row gx-2">{renderedProducts}</div>
    </div>
  );
};

export default Marketplace;
