import React from "react";
import popular from "../images/popular-image.jpg";
import gift from "../images/gift.jpg";
import specials from "../images/specials.jpg";
import "./FeatureBar.css";

const FeatureBar = () => {
  return (
    <div className="category-bar">
      <div className="ui container">
        <h2>Find things you'll love. Only on Vince And Kath</h2>
        <div className="ui three column grid">
          <section className="column">
            <img alt="popular-items" src={popular} />
            <h4>Popular ✨</h4>
          </section>
          <section className="column">
            <img alt="gifts" src={gift} />
            <h4>Gifts 🎁</h4>
          </section>
          <section className="column">
            <img alt="gifts" src={specials} />
            <h4>Specials 🚀</h4>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
