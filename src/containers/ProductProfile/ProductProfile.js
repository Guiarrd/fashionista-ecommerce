import React from 'react';

import './ProductProfile.scss';

const ProductProfile = () => {
  return (
    <section className="productProfile">
      <article className="container">
        <header className="productProfile__header">
          <figure className="productProfile__image">
            <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt="Product Info" />
          </figure>
        </header>
        <div className="productProfile__detail">
          <h3 className="productProfile__name">VESTIDO TRANSPASSE BOW</h3>
          <div className="productProfile__prices">
            <span className="regular__price">R$ 199,90</span>
            <span className="num__parcelas">em até 3x de R$ 66,63</span>
          </div>
          <div className="productProfile__sizes">
            <p className="productProfile__sizes__title">Escolha o tamanho</p>
            <div className="sizes__btn__group">
              <button type="button" className="size__btn">P</button>
              <button type="button" className="size__btn size__btn--selected">M</button>
              <button type="button" className="size__btn">G</button>
            </div>
          </div>
          <div className="productProfile__actions">
            <button type="button" className="productProfile__purchase">Adicionar ao Carrinho</button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ProductProfile;