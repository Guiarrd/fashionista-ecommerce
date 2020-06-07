import React, { useState, useEffect } from 'react';

import Products from '../../containers/Products';
import './ProductsRoute.scss';

const ProductsRoute = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, [])

  return (
    <div className="products__route">
      <div className="container">
        <Products products={products} />
      </div>
    </div>
  );
};

export default ProductsRoute;
