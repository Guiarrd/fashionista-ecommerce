export const toggleSearch = (event) => ({
  type: "TOGGLE_SEARCH",
  payload: event
});

export const search = (term) => ({
  type: "SEARCH",
  payload: term
});