import CartActionTypes from './cart.types';

export const toggleCartVisibility = () => {
    return ({
        type: CartActionTypes.TOGGLE_CART_VISIBILITY
    })
}

export const addItemToCart = (item) => {
    return ({
        type: CartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    })
}