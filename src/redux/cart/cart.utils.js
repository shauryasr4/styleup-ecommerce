export const addItemTocart = (cartItems, newItem) => {
  const itemExists = cartItems.find(function(item) {
    return item.id === newItem.id;
  });

  if (itemExists) {
    return cartItems.map(function(item) {
      if (item.id === itemExists.id) {
        item.quantity++;
      }
      return item;
    });
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  return cartItems.filter(function(item) {
    return item.id !== itemToBeRemoved.id;
  });
};

export const reduceItemCountFromCart = (cartItems, itemToBeRemoved) => {
  const unfilteredCartItems = cartItems.map(function(item, index) {
    if (item.id === itemToBeRemoved.id) {
      item.quantity--;
      if (item.quantity === 0) {
        return null;
      }
    }
    return item;
  });
  return unfilteredCartItems.filter(function(cartItem) {
    return cartItem !== null;
  });
};
