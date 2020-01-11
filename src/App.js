import React from "react";
import { createStructuredSelector } from "reselect";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import SignInRegistrationPage from "./pages/signin-registration-page/signin-registration-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />{" "}
          <Route path="/shop" component={ShopPage} />{" "}
          <Route exact path="/signin" render={() => this.props.currentUser? (<Redirect to='/' />) : (<SignInRegistrationPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
