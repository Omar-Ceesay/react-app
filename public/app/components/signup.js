import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

class Signup extends Component {

  render(){
    return(
      <div className="container">

      <div className="col-sm-6 col-sm-offset-3">

      	<h1><span className="fa fa-sign-in"></span> Signup</h1>

      	<form action="/auth/signup" method="post">

      		<div className="form-group">

      			<label>Username</label>

      			<input type="text" className="form-control" name="username" required="true"/>

      		</div>

      		<div className="form-group">

      			<label>Password</label>

      			<input type="password" className="form-control" name="password" required="true"/>

      		</div>

      		<div className="form-group">

      			<label>Email</label>

      			<input type="text" className="form-control" name="email" required="true"/>

      		</div>

      		<div className="form-group">

      			<label>Name</label>

      			<input type="text" className="form-control" name="name" required="true"/>

      		</div>



      		<button type="submit" className="btn btn-warning btn-lg">Signup</button>

      	</form>
      	<p>Already have an account? <Link to="/login">Login</Link></p>

      	<p>Or go <Link to="/">home</Link>.</p>
        </div>
      </div>
    )
  }
}

export default Signup;
