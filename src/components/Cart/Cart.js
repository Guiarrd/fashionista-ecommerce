import React from 'react';

import './Cart.scss'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__items">
        <span className="cart__empty">Não há itens no carrinho :(</span>
      </div>
      <div className="cart__subtotal">
        <div className="header__title">
          <span>Subtotal: R$ 0,00</span>
        </div>
      </div>
    </div>
  )
}

export default Cart;