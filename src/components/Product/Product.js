import React from 'react';

import './Product.scss'

const Product = () => {
  return (
    <section className="product__list">
      <article className="product">
        <header className="product__header">
          <figure className="product__image">
            <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt="Produto Info" />
          </figure>
        </header>
        <div className="product__info">
          <span className="product__name">VESTIDO TRANSPASSE BOW</span>
        </div>
        <div className="product__prices">
          <span className="regular__price">R$ 199,90</span>
        </div>
      </article>

      <article className="product">
        <header className="product__header">
          <figure className="product__image">
            <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg" alt="Produto Info" />
          </figure>
        </header>
        <div className="product__info">
          <span className="product__name">REGATA ALCINHA FOLK</span>
        </div>
        <div className="product__prices">
          <span className="regular__price regular__price--has-discount">R$ 199,90</span>
          <span className="actual__price">R$ 99,90</span>
        </div>
      </article>
    </section>
  )
}

export default Product;