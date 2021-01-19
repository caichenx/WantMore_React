import React from "react";
import "./ItemList.css";
import "./style/Carousel.css";
import homepage_4 from "../images/homepage_4.jpg";

const Carousel = () => {
  return (
    <div className="container carousel-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homepage_4} className="d-block w-100" alt="homepage_1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mindful Chrismas</h5>
              <p>Slow Made. Handcrafted Gifts</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homepage_4} className="d-block w-100" alt="homepage_2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mindful Chrismas</h5>
              <p>Slow Made. Handcrafted Gifts</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homepage_4} className="d-block w-100" alt="homepage_3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mindful Chrismas</h5>
              <p>Slow Made. Handcrafted Gifts</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;

/* TEXT ON HOME PAGE
<div className="col-sm-12  col-md-4">
  <h2>Vince && Kath </h2>
  <h3>Find things you'll love.</h3>
  <h3>
    Discover unique hand-picked items that makes your Chrismax
    unforgettable
  </h3>
</div>
 */
