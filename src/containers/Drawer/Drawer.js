import React from 'react'
import Cart from '../../components/Cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './Drawer.scss'

const Drawer = ({isVisible}) => {
  return (
    <div className={`drawer${isVisible ? ' drawer--is-visible' : ''}`}>
      <header className="drawer__header">
        <div className="header__content">
          <div className="header__icons">
            <button className="header__icon">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="header__title">
            <span>Sacola (0)</span>
          </div>
        </div>
      </header>
      <div className="drawer__content">
        <Cart />
      </div>
    </div>
  )
}

export default Drawer;