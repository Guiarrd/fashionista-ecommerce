import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import './Topbar.scss'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
          <Link to="/">
            <img src={require("../../assets/img/fashionista-logo.svg")} alt="Logo" />
          </Link>
        <div className="topbar__group">
          <button className="topbar__icon">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="topbar__icon">
            <FontAwesomeIcon icon={faShoppingBag} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar;