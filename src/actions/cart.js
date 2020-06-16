export const checkSizes = (size) => ({
  type: "CHECK_SIZES",
  payload: size > 0
});

export const toggleCart = (event) => ({
  type: "TOGGLE_CART",
  payload: event
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product
});

export const removeFromCart = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: product
});