import React, {Component} from 'react';
import Home from "./components/home";
import {
    // withRouter,
    HashRouter,
    Route,
    // Link,
    // Switch,
    NavLink
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <>
          <HashRouter>
              <Route exact path="/" component={Home}/>
          </HashRouter>
        </>
    )
  }
}

export default App;