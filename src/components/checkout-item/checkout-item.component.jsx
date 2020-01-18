import React from 'react';

import {connect} from 'react-redux';

import {removeItemFromCart, addItemToCart, reduceItemCountFromCart} from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem, removeItemFromCart, addItemToCart, reduceItemCountFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name' > {name} </span>
            <span className='quantity' > 
                <div className='arrow' onClick={() => {reduceItemCountFromCart(cartItem)}}> &#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => {addItemToCart(cartItem)}}> &#10095;</div>
            </span>
            <span className='price' > ${price}</span>
            <span className='remove-button' onClick={() => {removeItemFromCart(cartItem);}}> &#10005; </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: (itemToBeRemoved) => dispatch(removeItemFromCart(itemToBeRemoved)),
    addItemToCart: (itemToBeAdded) => dispatch(addItemToCart(itemToBeAdded)),
    reduceItemCountFromCart: (itemToBeReduced) => dispatch(reduceItemCountFromCart(itemToBeReduced)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);