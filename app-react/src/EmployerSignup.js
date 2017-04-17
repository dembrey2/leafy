import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

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
		fetch(window.apiHost + '/api/users' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            user: {
                employer_profile_attributes: {
                    company_name: this.state.companyName
                },
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

            if (response.user.token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('user', JSON.stringify(response));
                // window.user = JSON.parse(sessionStorage.getItem('user'))
                // if (window.user) { window.user = window.user.user }
                // browserHistory.push('/dashboard');
                location.href = ('/dashboard');
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
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4 text-center">
                        <div className="panel panel-default panel-transparent">
                            <div className="panel-body">
                                <h3>Sign up as an employer</h3><br/>
                                <div className="form-group text-left">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" className="form-control" id="company_name" placeholder="" onChange={(e) => this.setState({ companyName: e.target.value })} />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="" onChange={(e) => this.setState({ username: e.target.value })} />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="password">Create a Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="" onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-default" onClick={this.employerSignup}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default EmployerSignup;
