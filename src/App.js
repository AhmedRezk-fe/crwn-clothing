import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage/homePage.Component";
import "./App.css";

const AnyPage = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          return props.match.url == props.history.location.pathname
            ? props.history.push("TopicPage")
            : null;
        }}
      >
        anyPage
      </button>
      <h1>anyPage</h1>
    </div>
  );
};
const TopicPage = (props) => {
  return (
    <div>
      <button
        onClick={() => {
             props.history.push("/TopicPage/:12")
        }}
      >
        anyPage
      </button>
      <h1>TopicPage</h1>
    </div>
  );
};
const TopicDitails = (props) => {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          if(props.match.url == props.history.location.pathname){
          //  var x =  props.history.location.pathname ;
            //  console.log(x)
            props.history.push("/anyPage" )
          }else {
            return null
          }
        }}
      >
        anyPage
      </button>
      <h1>TopicDitails</h1>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/anyPage" component={AnyPage} />
      <Route exact path="/TopicPage" component={TopicPage} />
      <Route path="/TopicPage/:12" component={TopicDitails} />
    </Switch>
  );
}

export default App;
