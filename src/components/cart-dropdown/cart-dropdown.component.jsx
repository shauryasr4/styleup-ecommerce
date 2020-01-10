import React from 'react';

import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

// const CartDropdown = ({hideCart}) => {
//     return (
//         hideCart? null :
//         <div className='cart-dropdown'>
//             <div className='cart-items'>
//             </div>
//             <CustomButton> Go To Cart </CustomButton>
//         </div>  
//     )
// }

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(function(cartItem){
                    return <CartItem item={cartItem}/>
                })}
            </div>
            <CustomButton> Go To Cart </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);