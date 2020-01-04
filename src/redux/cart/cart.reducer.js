import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hideCart: true
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
            };
        default: 
            return state;
    }
        
}

export default cartReducer;