import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home';
import Board from '../components/boader/main';
import Login from '../components/login';

class Router extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/board" component={Board}/>
          <Route path="/Login" component={Login}/>
        </Switch>
      </div>
    )
  }
}

export default Router;