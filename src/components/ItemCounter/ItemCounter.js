import React from 'react';

import './ItemCounter.scss';

const ItemCounter = () => {
  return (
    <sup className="item__counter">
      <span className="counter__value">0</span>
    </sup>
  )
}

export default ItemCounter;