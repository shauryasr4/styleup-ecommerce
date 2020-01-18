import React from 'react';

import './cart-item.style.scss';

const cartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>
                    {quantity}x{'$'+price}
                </span>
            </div>
        </div>
    )
}

export default cartItem;