import React from "react";
import "./header.style.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
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
        {
          currentUser?
          <div className="navigation-item" onClick={()=>{auth.signOut()}}>SIGN OUT</div> :
          <Link className="navigation-item" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  );
};

export default Header;
