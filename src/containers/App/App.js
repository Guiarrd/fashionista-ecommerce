import React from 'react';
import Topbar from '../../components/Topbar'
import Routes from '../../routes'
import { BrowserRouter } from 'react-router-dom';
import ProductProfile from '../ProductProfile'

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Topbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
