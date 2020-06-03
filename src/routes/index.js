import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsRoute from './ProductsRoute';
import ProductRoute from './ProductRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsRoute} />
    <Route exact path="/produto" component={ProductRoute} />
  </Switch>
);

export default Routes;
