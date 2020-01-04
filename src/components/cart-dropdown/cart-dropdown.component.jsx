import React from 'react';

// import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

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

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            </div>
            <CustomButton> Go To Cart </CustomButton>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     const {cart} = state;
//     return {
//         hideCart: cart.hideCart
//     }
// }

// export default connect(mapStateToProps)(CartDropdown);
export default CartDropdown;