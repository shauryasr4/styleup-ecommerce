import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], function(cart) {
    return cart.cartItems;
})

export const selectCartItemsCount = createSelector([selectCartItems], function(cartItems) {
    return cartItems.reduce(function(cartItemsCount, cartItem) {
        return cartItemsCount + cartItem.quantity;
    }, 0);
})