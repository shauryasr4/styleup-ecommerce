import React from 'react';

import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';
import { ReactComponent as EmptyCartIcon } from "../../assets/empty-cart.svg";

const CartDropdown = ({ cartItems, toggleCartVisibility, history }) => {
    return (
        <div className='cart-dropdown'>
            {cartItems.length > 0 ? 
            <div className='cart-items'>
            {cartItems.map(function (cartItem) {
                return <CartItem item={cartItem} />
            })}
        </div>: <div className='empty-cart'><EmptyCartIcon className='empty-cart-icon'/><span>Your cart is empty :(</span></div>}
            
            <CustomButton buttonAction={()=> {history.push('/checkout'); toggleCartVisibility(); }}> Go To Cart </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => {
    return ({
        toggleCartVisibility: () => dispatch(toggleCartVisibility())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));