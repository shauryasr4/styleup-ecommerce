import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop-page.component';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
