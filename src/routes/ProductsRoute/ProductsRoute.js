import React, { useState, useEffect } from 'react';

import Products from '../../containers/Products';
import './ProductsRoute.scss';

const ProductsRoute = () => {
  return (
    <div className="products__route">
      <div className="container">
        <Products />
      </div>
    </div>
  );
};

export default ProductsRoute;
