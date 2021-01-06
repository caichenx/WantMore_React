import React from "react";
import SingleItemTile from "./SingleItemTile";

const Marketplace = ({ images, onProductClick }) => {
  const renderedImages = images.map((image) => {
    return <SingleItemTile image={image} onProductClick={onProductClick} />;
  });

  return (
    <div className="container">
      <div className="row gx-2">{renderedImages}</div>
    </div>
  );
};

export default Marketplace;
