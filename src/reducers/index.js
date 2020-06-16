import { combineReducers } from 'redux'

import cartReducer from './cart';
import drawerReducer from './drawer';
import productReducer from './product';
import productsReducer from './products';
import searchReducer from './search';

const appReducers = combineReducers({
  cart: cartReducer,
  drawer: drawerReducer,
  product: productReducer,
  products: productsReducer,
  search: searchReducer
})

export default appReducers;