import React from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {connect} from 'react-redux';

import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors.js'
import {createStructuredSelector} from 'reselect';

import './checkout-page.style.scss';

const CheckoutPage = ({cartItems, totalAmountDue}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'> 
                <span>Product </span> 
                </div>
                <div className='header-block'> <span>Description </span> </div>
                <div className='header-block'> <span>Quantity </span></div>
                <div className='header-block'> <span>Price </span></div>
                <div className='header-block'> <span>Remove </span></div>
            </div>
            {cartItems.map(function(cartItem) {
                return <CheckoutItem key={cartItem.id} cartItem={{...cartItem}}/>
            })}
            <div className='total'> TOTAL: ${totalAmountDue} </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalAmountDue: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);