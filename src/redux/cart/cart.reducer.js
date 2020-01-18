import CartActionTypes from './cart.types';

import { addItemTocart, removeItemFromCart, reduceItemCountFromCart } from './cart.utils';

const INITIAL_STATE = {
    hideCart: true,
    cartItems: []
}

const cartReducer = (state, action) => {
    if (!state) {
        state = INITIAL_STATE;
      }
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                hideCart: !state.hideCart
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemTocart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REDUCE_ITEM_COUNT:
            return {
                ...state,
                cartItems: reduceItemCountFromCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
        
}

export default cartReducer;