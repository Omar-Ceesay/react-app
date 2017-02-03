import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

class Login extends Component {

  render(){
    return(
      <div className="container">

        <div className="col-sm-6 col-sm-offset-3">

        	<h1><span className="fa fa-sign-in"></span> Login</h1>

        	<form action="/auth/login" method="post">
        		<div className="form-group">
        			<label>Username</label>
        			<input id="login" type="text" className="form-control" name="usernameUpper"></input>
        		</div>
        		<div className="form-group">
        			<label>Password</label>
        			<input type="password" className="form-control" name="password"></input>
        		</div>

        		<button type="submit" className="btn btn-warning btn-lg">Login</button>
        	</form>
        	<p>Need an account? <Link to="/signup">Signup</Link></p>
        	<p>Or go <Link to="/">home</Link>.</p>

        </div>
      </div>
    )
  }
}

export default Login;
