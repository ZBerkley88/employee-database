import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=link1">
            <h6>LINK1</h6>
          </Link>
          <Link className="link" to="/?cat=link2">
            <h6>LINK2</h6>
          </Link>
          <Link className="link" to="/?cat=link3">
            <h6>LINK3</h6>
          </Link>
          <Link className="link" to="/?cat=link4">
            <h6>LINK4</h6>
          </Link>
          <span>Username</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
