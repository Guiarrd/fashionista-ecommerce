import React from 'react';

import './SingleProduct.scss';

const SingleProduct = () => {
  return (
    <section className="singleProduct">
      <article className="container">
        <header className="singleProduct__header">
          <figure className="singleProduct__image">
            <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt="Product Info" />
          </figure>
        </header>
        <div className="singleProduct__detail">
          <h3 className="singleProduct__name">VESTIDO TRANSPASSE BOW</h3>
          <div className="singleProduct__prices">
            <span className="regular__price">R$ 199,90</span>
            <span className="num__parcelas">em até 3x de R$ 66,63</span>
          </div>
          <div className="singleProduct__sizes">
            <p className="singleProduct__sizes__title">Escolha o tamanho</p>
            <div className="sizes__btn__group">
              <button type="button" className="size__btn">P</button>
              <button type="button" className="size__btn size__btn--selected">M</button>
              <button type="button" className="size__btn">G</button>
            </div>
          </div>
          <div className="singleProduct__actions">
            <button type="button" className="singleProduct__purchase">Adicionar ao Carrinho</button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingleProduct;