import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Login from './main/Login';
import Main from './main/Main';
import './App.css';


class App extends React.Component {
  
  render() {

    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    );
  }
}

export default App;
