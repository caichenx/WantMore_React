import React from "react";
import Link from "./Link";
import "./ItemList.css";

const SingleItemTile = ({ image, onProductClick }) => {
  return (
    <div
      className="col col-xs-12 col-sm-6 col-md-4 col-lg-2"
      onClick={() => onProductClick(image)}
    >
      <Link className="" href={`/marketplace/${image.id}`}>
        <img
          alt={image.alt_description}
          className="img-thumbnail"
          src={image.urls.thumb}
          style={{ height: "140px", width: "200px" }}
        ></img>
        <div id="item-info">
          <p>{image.alt_description}</p>
          <h4>AU$12.35</h4>
        </div>
      </Link>
    </div>
  );
};

export default SingleItemTile;
