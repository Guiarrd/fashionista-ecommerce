import React from 'react';
import Product from '../../components/Product'
import { Link } from 'react-router-dom';

import './Products.scss'

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products__count">
          <span>22 itens</span>
        </div>
        <Link to="/produto">
          <Product />
        </Link>
      </div>
    </div>
  )
}

export default Products;