// src/redux/actions/cartActions.js
export const addToCart = (property) => ({
    type: "ADD_TO_CART",
    payload: property,
  });
  
  export const removeFromCart = (property) => ({
    type: "REMOVE_FROM_CART",
    payload: property,
  });
  