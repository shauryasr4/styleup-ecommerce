import React from "react";
import "./header.style.scss";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {selectCartVisibility} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { connect } from 'react-redux';

import { createStructuredSelector} from 'reselect';

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCart: selectCartVisibility
})

export default connect(mapStateToProps)(Header);
