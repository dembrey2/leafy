import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'

class EmployerProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.employerEdit = this.employerEdit.bind(this)
		this.state = {
			company_name: window.user.employer_profile.company_name,
			contact_name: window.user.employer_profile.contact_name,
			contact_email: window.user.employer_profile.contact_email,
			contact_phone: window.user.employer_profile.contact_phone,
			communication: window.user.communication,
			about: window.user.about
		}
	}

	employerEdit() {
		fetch(window.apiHost + '/api/users/' + window.user.id , {
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
					company_name: this.state.company_name,
					contact_name: this.state.contact_name,
					contact_email: this.state.contact_email,
					contact_phone: this.state.contact_phone,

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

            // console.log(response);
            // window.user = response.user;
			// sessionStorage.setItem('user', JSON.stringify(response));
			// browserHistory.push('/dashboard')
        })
	}

  render() {
    return (
      <div>
	  	<EmployerSnapshot/>
		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Edit Profile</h3>
						<div className="form-group">
							<label htmlFor="companyName">Company Name</label>
							<input type="text" className="form-control" id="company_name" value={this.state.company_name} onChange={(e) => this.setState({company_name: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="contactName">Contact Name</label>
							<input type="text" className="form-control" id="contact_name" value={this.state.contact_name}  onChange={(e) => this.setState({contact_name: e.target.value})}/>

						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="text" className="form-control" name="contact_email" value={this.state.contact_email} onChange={(e) => this.setState({contactEmail: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input type="text" className="form-control" name="contact_phone" value={this.state.contact_phone} onChange={(e) => this.setState({contactPhone: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="communication">Preferred method of communication:</label>
							<select className="form-control" value={this.state.communication} onChange={(e) => this.setState({communication: e.target.value})}>
								<option>Phone</option>
								<option>Email</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="about">About</label>
							<textarea className="form-control" name="about" value={this.state.about} onChange={(e) => this.setState({about: e.target.value})}/>
						</div>
						<div className="form-group text-center">
							<button type="button" className="btn btn-default" onClick={this.employerEdit}>Save</button>
							<button type="button" className="btn btn-default" onClick={() => browserHistory.push('/dashboard')}>Cancel</button>
							</div>
						
			</div>
		</div>
        
    </div>
    );
  }
}

export default EmployerProfileEdit;
