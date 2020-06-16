export const getProductsRequest = () => ({
  type: "GET_PRODUCTS_REQUEST"
});

export const getProductsSuccess = (products) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: products
});

export const getProductsError = ({ message }) => ({
  type: "GET_PRODUCTS_ERROR",
  payload: { message }
});