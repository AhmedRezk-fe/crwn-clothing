import React from "react";
import { Switch, Route } from "react-router-dom";

// import my page
import HomePage from "./Pages/HomePage/homePage.Component";
import ShopPage from "./Pages/Shop/Shop.component";
import Authentication from "./Pages/AuthenticationPage/Authentication.component";

// import header
import Header from "./Components/Component_Header/Header/Header.component";

// import auth
import { auth ,createUserProfileDocument} from "./Firebase/Firebase.Utils";

import {connect} from "react-redux";

import {SetCurrentUser} from "./Redux/User/user.action"

// import css
import "./App.css";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {d} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          
          d( {
            id : snapShot.id,
            ...snapShot.data()
          })
 
          console.log('state',SetCurrentUser);
          
        });
      } 
        
      d(userAuth);
    }); 
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header  />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Authentication} />
        </Switch>
      </>
    );
  }
}

const mapDispachToProps = dispach => ({
  d : user => dispach(SetCurrentUser(user))
})

export default connect(null , mapDispachToProps)(App);
