import React from 'react';
import Product from '../../components/Product'

import './Products.scss'

const Topbar = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products__count">
          <span>22 itens</span>
        </div>
        <Product />
      </div>
    </div>
  )
}

export default Topbar;