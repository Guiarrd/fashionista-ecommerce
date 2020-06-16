const INITIAL_STATE = {
  items: [],
  count: 0,
  isSizeSelected: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}

export default cartReducer