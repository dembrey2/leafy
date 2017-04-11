import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EmployerSignup extends Component {

	constructor(props) {
        super(props)
        this.employerSignup = this.employerSignup.bind(this)
        this.state = {
          companyName: '',
          username: '',
		  password: ''
        }
    }

	employerSignup() {
		fetch(window.apiHost + '/api/employers' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
           // token: window.user.token,
            employer: {
                company_name: this.state.companyName,
                username: this.state.username,
                password: this.state.password,
            }
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.employer.token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('employer', JSON.stringify(response));
                browserHistory.push('/employerdashboard');
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
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Sign Up</h3>
				
						<div className="form-group">
							<label htmlFor="companyName">Company Name</label>
							<input type="text" className="form-control" id="company_name" placeholder="" onChange={(e) => this.setState({companyName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" className="form-control" id="username" placeholder=""onChange={(e) => this.setState({username: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Create a Password</label>
							<input type="password" className="form-control" id="password" placeholder="" onChange={(e) => this.setState({password: e.target.value})}/>
						</div>
						

						<button type="submit" className="btn btn-default" onClick={this.employerSignup}>Submit</button>
			</div>
		</div>
    </div>
    );
  }
}

export default EmployerSignup;
