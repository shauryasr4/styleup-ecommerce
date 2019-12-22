import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInRegistrationPage from './pages/signin-registration-page/signin-registration-page.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user}); 
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()
  {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser = {currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInRegistrationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
