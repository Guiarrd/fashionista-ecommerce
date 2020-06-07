import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss'

const Product = ({image, name, regular_price, actual_price, on_sale, discount_percentage}) => {
  const hasDiscount = on_sale ? 'regular__price--has-discount' : ''
  const imgNotFound = require('../../assets/img/not-found.png')
  
  return (
    <Link to="/produto">
      <article className="product">
        <header className="product__header">
          <figure className="product__image">
            <img src={image || imgNotFound} alt={name} />
          </figure>
          {on_sale && 
            <sup className="product__on-sale">
              <span>{discount_percentage}</span>
            </sup>
          }
        </header>
        <div className="product__info">
          <span className="product__name">{name}</span>
        </div>
        <div className="product__prices">
          <span className={`regular__price ${hasDiscount}`}>{regular_price}</span>
          {on_sale && <span className="actual__price">{actual_price}</span>}
        </div>
      </article>
    </Link>
  )
}

export default Product;