import React from "react";
import Link from "./Link";
import popular from "../images/popular-image.jpg";
import gift from "../images/gift.jpg";
import specials from "../images/specials.jpg";
import "./style/FeatureBar.css";

const FeatureBar = ({ fetchImages }) => {
  return (
    <div className="category-bar">
      <div className="ui container">
        <div className="featurebar-text">
          <p>
            <span className="text-enlarge">Find </span> things you
            <span className="text-enlarge"> Love</span>
          </p>
          <p>
            <span className="text-enlarge">Only</span> on WantMore
          </p>
        </div>
        {/* <div className="ui three column grid">
          <section className="column">
            <Link href="/popular">
              <img alt="popular-items" src={popular} />
              <h4>Popular ✨</h4>
            </Link>
          </section>
          <section className="column">
            <img alt="gifts" src={gift} />
            <h4>Gifts 🎁</h4>
          </section>
          <section className="column">
            <img alt="gifts" src={specials} />
            <h4>Specials 🚀</h4>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default FeatureBar;
