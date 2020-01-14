import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], function(cart) {
    return cart.cartItems;
})

export const selectCartVisibility = createSelector([selectCart], function(cart) {
    return cart.hideCart;
})

export const selectCartItemsCount = createSelector([selectCartItems], function(cartItems) {
    return cartItems.reduce(function(cartItemsCount, cartItem) {
        return cartItemsCount + cartItem.quantity;
    }, 0);
})

export const selectCartItemsTotal = createSelector([selectCartItems], function(cartItems) {
    return cartItems.reduce(function(cartItemsTotal, cartItem) {
        return cartItemsTotal + (cartItem.quantity * cartItem.price);
    }, 0);
})