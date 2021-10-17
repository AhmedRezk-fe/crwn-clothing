export const addItemToCart = (itemCart, addToCart) => {
  const extentItemCart = itemCart.find((item) => item.id === addToCart.id);

  if (extentItemCart) {
    return itemCart.map((item) =>
      item.id === addToCart.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...itemCart, { ...addToCart, quantity: 1 }];
};

export const removeCartFromCheckOut = (cartItems, cartItemToRemove) => {
  
  const extentItemCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (extentItemCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
