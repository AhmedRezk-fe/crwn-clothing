import React from "react";
import { Switch, Route } from "react-router-dom";

// import my page
import HomePage from "./Pages/HomePage/homePage.Component";
import ShopPage from "./Pages/Shop/Shop.component";
import Authentication from "./Pages/AuthenticationPage/Authentication.component";

// import header
import Header from "./Components/Component_Header/Header/Header.component";

// import auth
import {auth} from "./Firebase/Firebase.Utils";

// import css
import "./App.css";

class App extends React.Component {
  state = {
    currentUser: null
  };
  unSubscribeFromAuth=null
  componentDidMount() {
    // console.log(auth)
    this.unSubscribeFromAuth=auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user
      });
      console.log(user)
    });
    // setTimeout(() => {
    //   this.unSubscribeFromAuth()
    // }, 3000);
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {
            this.state.currentUser ? 
             <Route path="/auth" component={Authentication} /> : 
             <Route exact path="/auth" component={HomePage} />
          }
          
        </Switch>
      </>
    );
  }
}

export default App;
