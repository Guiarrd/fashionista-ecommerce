import React from 'react';
import Topbar from '../../components/Topbar'
import Drawer from '../Drawer'

import Routes from '../../routes'
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Topbar />
        <Routes />
        <Drawer />
      </BrowserRouter>
    </div>
  );
}

export default App;
