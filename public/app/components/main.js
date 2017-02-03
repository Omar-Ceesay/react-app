import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

class Main extends Component {

  render(){
    return(
      <div className="container">

      	<div className="jumbotron text-center">
      		<h1><span className="fa fa-lock"></span> Node Authentication</h1>

      		<p>Login or Register with:</p>
      		<Link to="/signup" className="btn btn-default"><span className="fa fa-user"></span> Local Signup</Link>
          <Link to="/login" className="btn btn-default"><span className="fa fa-user"></span> Local Login</Link>
      	</div>

      </div>
    )
  }
}

export default Main;
