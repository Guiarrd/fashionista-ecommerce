const INITIAL_STATE = {
  request: false,
  error: null,
  items: []
}

const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        request: true,
        items: []
      }
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        request: false,
        error: null,
        items: payload
      }
      case "GET_PRODUCTS_ERROR":
        return {
          ...state,
          request: false,
          error: payload,
          items: []
        }
    default:
      return state
  }
}

export default productsReducer