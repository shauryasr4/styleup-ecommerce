import React from "react";
import "./header.style.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="navigation-items">
        <Link className="navigation-item" to="/shop">SHOP</Link>
        <Link className="navigation-item" to="/">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
