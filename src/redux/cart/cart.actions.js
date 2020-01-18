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

export const removeItemFromCart = (item) => {
    return ({
        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    })
}

export const reduceItemCountFromCart = (item) => {
    return ({
        type: CartActionTypes.REDUCE_ITEM_COUNT,
        payload: item
    })
}