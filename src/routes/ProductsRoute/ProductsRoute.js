import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Products from '../../containers/Products';
import {
  getProductsRequest,
  getProductsSuccess,
  getProductsError
} from '../../actions'

import './ProductsRoute.scss';

const ProductsRoute = () => {
  const { products } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getProductsRequest())

    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then(response => response.json())
      .then(data => dispatch(getProductsSuccess(data)))
      .catch(error => dispatch(getProductsError(error)));
  }, [dispatch])

  return (
    <div className="products__route">
      <div className="container">
        <Products products={products.items} />
      </div>
    </div>
  );
};

export default ProductsRoute;
