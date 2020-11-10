// import component from react
import { Switch, Route } from "react-router-dom";

// import my page 
import HomePage from "./Pages/HomePage/homePage.Component";
import ShopPage from "./Pages/Shop/Shop.component";
import Authentication from "./Pages/AuthenticationPage/Authentication.component";

// import header
import Header from "./Components/Component_Header/Header/Header.component";

// import css 
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={Authentication} />
      </Switch>
    </>
  );
}

export default App;
