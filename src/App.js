import React, {Component} from 'react';
import Home from "./components/home";
import LogIn from "./components/logIn";
import Registration from "./components/registration";
import LogOut from "./components/logOut";
import {
    // withRouter,
    HashRouter,
    Route,
    // Link,
    // Switch,
    // NavLink
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <>
          <HashRouter>
              <Route exact path="/" component={Home}/>
              <Route exact path="/logowanie" component={LogIn}/>
              <Route exact path="/rejestracja" component={Registration}/>
              <Route exact path="/wylogowano" component={LogOut}/>
          </HashRouter>
        </>
    )
  }
}

export default App;