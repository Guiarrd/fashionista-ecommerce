import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import { loadProductRequest, loadProductSuccess, loadProductsError } from '../../actions'

import './SingleProduct.scss';

const SingleProduct = () => {
  const { products } = useSelector(state => state)
  const { name } = useParams()
  const dispatch = useDispatch()
  const productName = name.split('-').join(' ')
  const product = products.items.find(item => item.name.toLowerCase() === productName)
  
  useEffect(() => {
    if (product) {
      dispatch(loadProductSuccess(product))
    } else {
      dispatch(loadProductsError("Produto não encontrado!"))
    }
    
  }, [dispatch, product])

  const imgNotFound = require('../../assets/img/not-found.png')
  const hasDiscount = product.on_sale ? 'regular__price--has-discount' : ''
  
  return (
    <section className="singleProduct">
      <article className="container">
        <header className="singleProduct__header">
          <figure className="singleProduct__image">
            <img src={product.image || imgNotFound} alt={product.name} />
          </figure>
        </header>
        <div className="singleProduct__detail">
          <h3 className="singleProduct__name">{product.name}</h3>
          <div className="singleProduct__prices">
            <span className={`regular__price ${hasDiscount}`}>{product.regular_price}</span>
            {product.on_sale && <span className="actual__price" style={{'marginLeft': '5px'}}>{product.actual_price}</span>}
            <span className="num__parcelas">em até {product.installments}</span>
          </div>
          <div className="singleProduct__sizes">
            <p className="singleProduct__sizes__title">Escolha o tamanho</p>
            <div className="sizes__btn__group">
              {product.sizes
                .filter(item => item.available === true)
                .map(size => (
                  <button key={size.sku} type='button' className='size__btn'>{size.size}</button>
                ))
              }
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