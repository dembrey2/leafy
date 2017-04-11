import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class UserSignup extends Component {

	 constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
        this.state = {
          firstName: '',
          lastName: '',
          username: '',
          password: ''
        }
    }

	signup() {
		fetch(window.apiHost + '/api/users' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            user: {
                seeker_profile_attributes: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName
                },
                employer_profile_attributes: {
                    company_name: this.state.companyName
                },
                username: this.state.username,
                password: this.state.password
            }
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.user.token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('user', JSON.stringify(response));
                browserHistory.push('/userdashboard');
            }
            else {
                alert('There was an error. Check out your console.');
                console.log(response);
            }
        })
	}


  render() {
    return (
      <div>
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3 text-center">
					<h3>Sign Up</h3>
						<div className="form-group">
							<label>First Name</label>
							<input htmlFor="first_name" type="text" className="form-control" id="first_name" name="first_name" placeholder="" onChange={(e) => this.setState({firstName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="last_name">Last Name</label>
							<input type="text" className="form-control" id="last_name" name="last_name" placeholder="" onChange={(e) => this.setState({lastName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="username">Create a Username</label>
							<input type="text" className="form-control" id="username" name="username" placeholder="" onChange={(e) => this.setState({username: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Create a Password</label>
							<input type="password" className="form-control" id="password" name="password" placeholder="" onChange={(e) => this.setState({password: e.target.value})}/>
						</div>
						<button type="button" className="btn btn-default" onClick={this.signup}>Save</button>
						<br/>
						<br/>
			</div>
	    </div>    
    </div>
    );
  }
}

export default UserSignup;
