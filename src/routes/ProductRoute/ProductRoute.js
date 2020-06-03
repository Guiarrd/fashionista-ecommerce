import React from 'react';
import ProductProfile from '../../containers/ProductProfile'

import './ProductRoute.scss';

const ProductRoute = () => {
  return (
    <div className="product__route">
      <div className="container">
        <ProductProfile />
      </div>
    </div>
  )
};

export default ProductRoute;
