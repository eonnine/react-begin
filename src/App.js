import React from 'react';
import Router from './router/router';
import Menu from './components/menu';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Menu />
          <div className="line"></div>
          <div className="content">
            <Router />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
