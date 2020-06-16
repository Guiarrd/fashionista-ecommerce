export const loadProductRequest = () => ({
  type: "LOAD_PRODUCT_REQUEST"
});

export const loadProductSuccess = (products) => ({
  type: "LOAD_PRODUCT_SUCCESS",
  payload: products
});

export const loadProductsError = (message) => ({
  type: "LOAD_PRODUCT_ERROR",
  payload: message
});

export const addSize = (size) => ({
  type: "ADD_SIZE",
  payload: size
});