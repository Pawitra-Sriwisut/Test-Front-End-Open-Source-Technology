import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import Home from "./component/home.component";
import Nav from "./component/nav.component"
import Login from "./component/login.component"
import Register from "./component/register.component"
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
