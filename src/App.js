import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInRegistrationPage from './pages/signin-registration-page/signin-registration-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInRegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
