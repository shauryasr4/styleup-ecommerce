import React from "react";
import "./header.style.scss";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { connect } from 'react-redux';

const Header = ({ currentUser, hideCart }) => {
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
          currentUser ?
            <div className="navigation-item" onClick={() => { auth.signOut() }}>SIGN OUT</div> :
            <Link className="navigation-item" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {hideCart ? null :
        <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => {
  const { user, cart } = state;
  return {
    currentUser: user.currentUser,
    hideCart: cart.hideCart
  }
}

export default connect(mapStateToProps)(Header);
