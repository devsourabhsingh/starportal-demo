import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import intractImage from "../../../Image/intractText.svg";
import BroadCast from "../../../Image/broadcast.svg";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  nav-head">
        <div
          className="container-fluid ms-auto me-auto"
          style={{ maxWidth: "1284px" }}
        >
          <NavLink className="navbar-brand" href="#">
            <img src={intractImage} alt="" />
          </NavLink>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 unorder-list-item">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Compass
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Academy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  NFTs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  For Projects
                </NavLink>
              </li>
            </ul>
            <div className="input-search-field">
              <div className="input-search">
                <span className="search">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  className="me-2 nav-input"
                  type="search"
                  size={50}
                  placeholder="Search for ecosystems,trending quest etc,."
                  aria-label="Search"
                />
              </div>
              <div className="btn-broad">
                <div className="broadcast">
                  <img src={BroadCast} alt="" />
                </div>
                <button
                  style={{
                    width: "5rem",
                    height: "2rem",
                    backgroundColor: "white",
                  }}
                  className="btn btn-sm"
                  type="button"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
