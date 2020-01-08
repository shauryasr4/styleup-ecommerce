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
