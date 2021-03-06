import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class EmployerProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.employerEdit = this.employerEdit.bind(this)
		this.lookupLocations = this.lookupLocations.bind(this)
		this.state = {
			company_name: window.user.employer_profile.company_name || '',
			contact_name: window.user.employer_profile.contact_name || '',
			contact_email: window.user.employer_profile.contact_email || '',
			contact_phone: window.user.employer_profile.contact_phone || '',
			preferred_contact: window.user.preferred_contact || '',
			location: window.user.location && window.user.location.id || '',
			about: window.user.about || '',
			lookupLocations:[],
			avatar: ''
		}
	}

	componentWillMount() {
		this.lookupLocations()
	}

	lookupLocations() {
		fetch(window.apiHost + '/api/locations')
		.then(function(response) {
				return response.json();
			})
		.then((response) => {
				this.setState({lookupLocations:response.locations})
			})
		}

	employerEdit() {
		let data = new FormData()
		data.append('token', window.user.token)
		data.append('user[employer_profile_attributes][id]', window.user.employer_profile.id)
		data.append('user[employer_profile_attributes][company_name]', this.state.company_name)
		data.append('user[employer_profile_attributes][contact_name]', this.state.contact_name)
		data.append('user[employer_profile_attributes][contact_email]', this.state.contact_email)
		data.append('user[employer_profile_attributes][contact_phone]', this.state.contact_phone)
		// data.append('user[employer_profile_attributes][preferred_contact]', this.state.preferred_contact)
		data.append('user[about]', this.state.about)
		data.append('user[location_id]', this.state.location)

		if (this.state.avatar !== '') {
			data.append('user[avatar]', this.state.avatar)
		}
	

		fetch(window.apiHost + '/api/users/' + window.user.id , {
        method: 'PUT',
		body: data
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            window.user = response.user;
			sessionStorage.setItem('user', JSON.stringify(response))	
			browserHistory.push('/dashboard')
        })
	}

  render() {
			 const locations = this.state.lookupLocations.map(location => (
			<option key={location.id} value={location.id}>{location.name}</option>
		))
    return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="panel panel-default">
							<div className="panel-body">
								<h3 className="text-center text-uppercase">Edit Profile</h3>
								<div className="form-group">
									<label htmlFor="companyName">Company Name</label>
									<input type="text" className="form-control" id="company_name" value={this.state.company_name} onChange={(e) => this.setState({ company_name: e.target.value })} />
								</div>
								<div className="form-group">
									<label htmlFor="contactName">Contact Name</label>
									<input type="text" className="form-control" id="contact_name" value={this.state.contact_name} onChange={(e) => this.setState({ contact_name: e.target.value })} />
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input type="text" className="form-control" name="contact_email" value={this.state.contact_email} onChange={(e) => this.setState({ contact_email: e.target.value })} />
								</div>
								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<input type="text" className="form-control" name="contact_phone" value={this.state.contact_phone} onChange={(e) => this.setState({ contact_phone: e.target.value })} />
								</div>
								<div className="form-group">
									<label htmlFor="preferred_contact">Preferred method of communication:</label>
									<select className="form-control" value={this.state.preferred_contact} onChange={(e) => this.setState({ preferred_contact: e.target.value })}>
									<option disabled>Select an Option</option>
										<option value="phone">Phone</option>
										<option value="email">Email</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="phone">Photo Upload</label>
									<input type="file" className="form-control" onChange={(e) => this.setState({ avatar: e.target.files[0] })} />
								</div>
								<div className="form-group">
									<label htmlFor="location">Location</label>
									<select className="form-control" value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })}>
									<option disabled>Select a Location</option>
										{locations}
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="about">About</label>
									<textarea className="form-control" name="about" value={this.state.about} onChange={(e) => this.setState({ about: e.target.value })} />
								</div>
								<div className="form-group text-center">
									<button type="button" className="btn btn-default" onClick={this.employerEdit}>Save</button>
									<button type="button" className="btn btn-default" onClick={() => browserHistory.push('/dashboard')}>Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default EmployerProfileEdit;

