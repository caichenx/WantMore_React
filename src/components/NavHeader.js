import React from "react";
import Link from "./Link";

const NaviHeader = ({ itemCount, user, logout }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Want More
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                href="/marketplace"
              >
                MARKETPLACE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                active
                aria-current="page"
                href="/cart"
              >
                CART{" "}
                {itemCount !== 0 ? (
                  <span className="badge bg-secondary">{itemCount}</span>
                ) : (
                  ""
                )}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" active aria-current="page" href=""></a>
            </li>
          </ul>
          <Link className="nav-link" aria-current="page" active href="">
            <button className="btn btn-success me-2" type="button" disabled>
              SIGN UP
            </button>
          </Link>
          <Link className="nav-link" aria-current="page" active href="/login">
            {user ? (
              <button
                className="btn btn-success me-2"
                type="button"
                onClick={logout}
              >
                LOGOUT
              </button>
            ) : (
              <button
                className="btn btn-success me-2"
                type="button"
                style={{ minWidth: "80px" }}
              >
                LOGIN
              </button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NaviHeader;
