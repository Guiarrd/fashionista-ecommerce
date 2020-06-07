import React from 'react';
import Product from '../../components/Product'

import './Products.scss'

const Products = ({ products }) => {
  const getTotalItems = () => `${products.length} itens`
  
  return (
    <div className="products">
      <div className="container">
        <div className="products__count">
          <span>{getTotalItems()}</span>
        </div>
        <section className="product__list">
          {products && products.map(product => 
            <Product 
              {...product}
              key={product.code_color}
            />
          )}
        </section>
      </div>
    </div>
  )
}

export default Products;