import React from 'react';
import Topbar from '../../components/Topbar'
import Products from '../Products'
import { BrowserRouter } from 'react-router-dom';
import ProductProfile from '../ProductProfile'

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Topbar />
        <Products />
      </BrowserRouter>
    </div>
  );
}

export default App;
