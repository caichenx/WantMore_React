import React from "react";
import Link from "./Link";
import "./style/ItemList.css";

const SingleItemTile = ({ product, onProductClick }) => {
  return (
    <div
      className="col col-xs-12 col-sm-6 col-md-4 col-lg-2"
      onClick={() => onProductClick(product)}
    >
      <Link className="" href={`/marketplace/${product.id}`}>
        <img
          alt={product.name}
          className="img-thumbnail"
          src={product.image.thumb}
          style={{ height: "140px", width: "200px" }}
        ></img>
        <div id="item-info">
          <p>{product.name}</p>
          <h4>{`AU$${product.price}`}</h4>
        </div>
      </Link>
    </div>
  );
};

export default SingleItemTile;
