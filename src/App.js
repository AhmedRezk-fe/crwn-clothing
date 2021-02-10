import React from "react";
import { Switch, Route ,Redirect } from "react-router-dom";

// import my page
import HomePage from "./Pages/HomePage/homePage.Component";
import ShopPage from "./Pages/Shop/Shop.component";
import CheckOut from "./Pages/CheckOutPage/checkOut";
import Authentication from "./Pages/AuthenticationPage/Authentication.component";

// import header
import Header from "./Components/Component_Header/Header/Header.component";

// import auth
import { auth ,createUserProfileDocument} from "./Firebase/Firebase.Utils";
import {selectCurrentUser} from "./Redux/User/user.selector"

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
    const {SetCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          
          SetCurrentUser( {
            id : snapShot.id,
            ...snapShot.data()
          })
 
          console.log('state',SetCurrentUser);
          
        });
      } 
        
      SetCurrentUser(userAuth);
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
          <Route exact  path="/auth" render={()=> this.props.currentUser ? (<Redirect to="/" /> ) : (<Authentication />)} />
          <Route exact path="/checkout" component={CheckOut} />

        </Switch>
      </>
    );
  }
}

const mapPropsToStat = (state) => ({
  currentUser : selectCurrentUser(state)
})

const mapDispachToProps = dispach => ({
  SetCurrentUser : user => dispach(SetCurrentUser(user))
})

export default connect(mapPropsToStat , mapDispachToProps)(App);
