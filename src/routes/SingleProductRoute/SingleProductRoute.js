import React from 'react';

import SingleProduct from '../../containers/SingleProduct'

import './SingleProductRoute.scss';

const SingleProductRoute = () => {  
  return (
    <div className="product__route">
      <div className="container">
        <SingleProduct />
      </div>
    </div>
  )
};

export default SingleProductRoute;
