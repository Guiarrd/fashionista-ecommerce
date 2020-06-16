const INITIAL_STATE = {
  showDrawer: false,
  showCart: false,
  showSearch: false
}

const drawerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}

export default drawerReducer