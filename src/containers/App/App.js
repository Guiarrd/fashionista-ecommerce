import React from 'react';
import Topbar from '../../components/Topbar'
import Products from '../Products'

import './App.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Products />
    </div>
  );
}

export default App;
