import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import{ browserHistory ,Router, Route, IndexRoute} from "react-router";

import Main from './components/main.js';
import Layout from './components/layout.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Profile from './components/profile.js';
import Authed from './components/authed.js';
import Auth from './components/mainAuth.js';

class App extends Component {

  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Main}/>
          <Route path="login" component={Login}></Route>
          <Route path="signup" component={Signup}></Route>
          <Route path="/auth/main" component={Auth}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
