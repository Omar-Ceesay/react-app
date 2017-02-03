import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {

  render(){
    return(
      <div className="container">



      	<div className="page-header text-center">

      		<h1><span className="fa fa-anchor"></span> Profile Page</h1>

          <a href="/auth/main" className="btn btn-default btn-sm">Home</a>

      		<a href="/auth/logout" className="btn btn-default btn-sm">Logout</a>

      	</div>
      	<div className="row">

      		<div className="col-sm-6">

      			<div className="well">

      				<h3><span className="fa fa-user"></span> Local</h3>



      					<p>

      						<strong>id</strong>:  user._id <br/>

      						<strong>username</strong>:  user.username <br/>

      						<strong>password</strong>:  user.password <br/>

      						<strong>email</strong>:  user.email <br/>

      						<strong>name</strong>:  user.name

      					</p>



      			</div>

      		</div>

          <div className="col-sm-6">

      			<div className="well">

      				<h3><span className="fa fa-mail-forward"></span> File Upload</h3>



              <form action="/auth/upload" className="form" method="post" enctype="multipart/form-data">

                <div className="form-group">

                  <input type="file" className="form" name="file" required="true"></input>

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

              </form>
      				<button id="myBtn">Open Modal</button>



      			</div>


      		</div>



      	</div>


        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Are you sure you want to deactivate your account?</p>
            <form action="/auth/goodbye" method="post">
              <button type="submit" className="btn btn-danger"><span className="fa fa-frown-o"></span> Yes</button>
              <button className="btn btn-success"><span className="fa fa-smile-o"></span> No</button>
            </form>
          </div>

        </div>

      </div>
    )
  }
}

export default Profile;
