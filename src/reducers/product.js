const INITIAL_STATE = {
  request: false,
  error: null,
  size: '',
  data: {}
}

const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case "LOAD_PRODUCT_REQUEST":
      return {
        ...state,
        data: {},
        request: true
      }
    case "LOAD_PRODUCT_SUCCESS":
      return {
        ...state,
        request: false,
        data: payload
      }
    case "LOAD_PRODUCT_ERROR":
      return {
        ...state,
        data: {},
        size: '',
        error: payload
      }
    default:
      return state
  }
}

export default productReducer