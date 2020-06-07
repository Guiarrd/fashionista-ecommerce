import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsRoute from './ProductsRoute';
import SingleProductRoute from './SingleProductRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsRoute} />
    <Route exact path="/produto" component={SingleProductRoute} />
  </Switch>
);

export default Routes;
