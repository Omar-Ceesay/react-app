import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

class Layout extends Component {

  render(){
    return(
      <div className="container">

      	{this.props.children}

      </div>
    )
  }
}

export default Layout;
