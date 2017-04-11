import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'

class EmployerProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			companyName: '',
			contactName: '',
			email: '',
			phone: '',
			communication: '',
			about: ''
		}
	}

	employerEdit() {
		fetch(window.apiHost + '/api/users' + window.user.id , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
		//added nested json
        body: JSON.stringify({
           token: window.user.token,
            user: {
				employer_profile_attributes: {
					id: window.user.employer_profile.id,
					company_name: this.state.companyName,
					contact_name: this.state.contactName,
					email: this.state.email,
					phone: this.state.phone,
					communication: this.state.communication,
				},
				about: this.state.about
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
                sessionStorage.setItem('user', JSON.stringify(response));
                browserHistory.push('/employerdetail');
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
	  	<EmployerSnapshot isEmployer={true}/>
		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Edit Profile</h3>
						<div className="form-group">
							<label htmlFor="companyName">Company Name</label>
							<input type="text" className="form-control" id="company_name" placeholder="" onChange={(e) => this.setState({companyName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="contactName">Contact Name</label>
							<input type="text" className="form-control" id="contact_name" placeholder="" onChange={(e) => this.setState({contactName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="text" className="form-control" id="email" placeholder="" onChange={(e) => this.setState({email: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input type="text" className="form-control" id="phone" placeholder="" onChange={(e) => this.setState({phone: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="communication">Preferred method of communication:</label>
							<select className="form-control" onChange={(e) => this.setState({communication: e.target.value})}>
								<option>Phone</option>
								<option>Email</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="about">About</label>
							<textarea className="form-control" id="about" placeholder="" onChange={(e) => this.setState({about: e.target.value})}/>
						</div>
						<div className="form-group text-center">
							<button type="button" className="btn btn-default" onClick={this.employerEdit}>Save</button>
							</div>
						
			</div>
		</div>
        
    </div>
    );
  }
}

export default EmployerProfileEdit;
