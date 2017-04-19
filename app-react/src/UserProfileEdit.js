import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.addSkill = this.addSkill.bind(this)
		this.editProfile = this.editProfile.bind(this)
		this.lookupSkills = this.lookupSkills.bind(this)
		this.lookupLocations = this.lookupLocations.bind(this)
		this.addTextNotification = this.addTextNotification.bind(this)
		this.addEmailNotification = this.addEmailNotification.bind(this)

		this.state = {
			email: window.user.seeker_profile.email || '',
			phone: window.user.seeker_profile.phone || '',
			skills: window.user.seeker_profile.skills.map(skill => skill.id),
			preferred_contact: window.user.preferred_contact || 'email',
			location: window.user.location.id || '',
			education: window.user.seeker_profile.education || '',
			work_history: window.user.seeker_profile.work_history || '',
			interests: window.user.seeker_profile.interests || '',
			lookupSkills: [],
			lookupLocations: [],
			textNotification: window.user.textNotification || [],
			emailNotification: window.user.emailNotification || [],
			about: window.user.about || '',
			avatar: ''
		}
	 }

	 componentWillMount(){
		 this.lookupSkills()
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

	 addSkill(e) {
		 let skills = this.state.skills

		 if (e.target.checked) {
			skills.push(Number(e.target.value))
		 }
		 else {
			skills = skills.filter(skillId => skillId !== Number(e.target.value))
			console.log(skills)
		 }

		 this.setState({skills:skills})
	 }

	 addTextNotification(e) {
		 let textNotification = this.state.textNotification

		 if (e.target.checked) {
			textNotification.push(Boolean(e.target.value))
			console.log(textNotification)
		 }
		 this.setState({textNotification:textNotification})
	 }

	 addEmailNotification(e) {
		 let emailNotification = this.state.emailNotification

		 if (e.target.checked) {
			emailNotification.push(Boolean(e.target.value))
			console.log(emailNotification)
		 }
		 this.setState({emailNotification:emailNotification})
	 }

	 lookupSkills() {
		fetch(window.apiHost + '/api/skills')
		.then(function(response) {
				return response.json();
			})
		.then((response) => {
				this.setState({lookupSkills:response.skills})
			})
	 }

	 editProfile() {
		let data = new FormData()
		data.append('token', window.user.token)
		data.append('user[seeker_profile_attributes][id]', window.user.seeker_profile.id)
		data.append('user[seeker_profile_attributes][email]', this.state.email)
		data.append('user[seeker_profile_attributes][phone]', this.state.phone)
		data.append('user[seeker_profile_attributes][preferred_contact]', this.state.preferred_contact)
		data.append('user[seeker_profile_attributes][skills]', this.state.skills.join(','))
		data.append('user[seeker_profile_attributes][education]', this.state.education)
		data.append('user[seeker_profile_attributes][work_history]', this.state.work_history)
		data.append('user[seeker_profile_attributes][interests]', this.state.interests)
		data.append('user[about]', this.state.about)
		data.append('user[location_id]', this.state.location)
		data.append('user[seeker_profile][text_me]', this.state.textNotification)
		data.append('user[seeker_profile][email_me]', this.state.emailNotification)

		if (this.state.avatar !== '') {
			data.append('user[avatar]', this.state.avatar)
		}

		fetch(window.apiHost + '/api/users/' + window.user.id , {
			method: 'PUT',
			// Back-end controls the left side, properties, of this object
			// Front-end controls the variables names and values on the right side
			body: data
		})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // console.log(response);
			window.user = response.user;
			sessionStorage.setItem('user', JSON.stringify(response));
			window.scrollTo(0,0)
			browserHistory.push('/dashboard')
        })
	}

  render() {
	  const skills = this.state.lookupSkills.map(skill => (
		  	<label className="checkbox" key={skill.id}>
				<input type="checkbox" value={skill.id} checked={this.state.skills.includes(skill.id)} onChange={this.addSkill} /> {skill.name}
			</label>
		))

		var halfLength = Math.ceil(skills.length / 2)   
		var leftSide = skills.slice(0,halfLength)
		var rightSide = skills.slice(halfLength)

		const locations = this.state.lookupLocations.map(location => (
			<option key={location.id} value={location.id}>{location.name}</option>
		))

    return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<div className="panel panel-default">
							<div className="panel-body">
								<div className="col-sm-8 col-sm-offset-2">
									<div className="form-group">
										<h3 className="text-uppercase">Edit Profile</h3>
										<label htmlFor="email" className="text-uppercase"> Email (optional)</label>
										<input type="text" className="form-control" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
									{/*</div>*/}
									<label className="checkbox">
											<input type="checkbox" name="send_text" checked={true === false ? "checked" : undefined} onChange={this.addEmailNotification} /> Send me an email when new jobs matching my profile are posted
									</label>
										<div className="form-group">
											<label htmlFor="phone" className="text-uppercase">Phone</label>
											<input type="text" className="form-control" name="phone" placeholder="" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
										</div>
										<label className="checkbox">
											<input type="checkbox" name="send_text" checked={true === false ? "checked" : undefined} onChange={this.addTextNotification} /> Send me a text message when new jobs matching my profile are posted
									</label>
										<div className="form-group">
											<label htmlFor="phone" className="text-uppercase">Photo Upload:</label>
											<input type="file" className="form-control" onChange={(e) => this.setState({ avatar: e.target.files[0] })} />
										</div>
										<div className="form-group">
											<label htmlFor="preferred_contact" className="text-uppercase">Preferred method of communication:</label>
											<select className="form-control" value={this.state.preferred_contact} onChange={(e) => this.setState({ preferred_contact: e.target.value })}>
												<option value="phone">Phone</option>
												<option value="email">Email</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="location" className="text-uppercase">Location:</label>
											<select className="form-control" value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })}>
												{locations}
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="about" className="text-uppercase">About</label>
											<textarea className="form-control" placeholder="" value={this.state.about} onChange={(e) => this.setState({ about: e.target.value })} />
										</div>
										<h3 className="text-uppercase">Skills and Abilities</h3>
										<div className="row">
											<div className="col-sm-6">
												{leftSide}
											</div>
											<div className="col-sm-6">
												{rightSide}
											</div>
										</div>
										<h3 className="text-uppercase">Work History/Education (Optional)</h3>
										<div className="form-group">
											<label htmlFor="education" className="text-uppercase">Education</label>
											<textarea className="form-control" value={this.state.education} onChange={(e) => this.setState({ education: e.target.value })} />
										</div>
										<div className="form-group">
											<label htmlFor="workHistory" className="text-uppercase">Work History</label>
											<textarea className="form-control" value={this.state.work_history} onChange={(e) => this.setState({ work_history: e.target.value })} />
										</div>
										<div className="form-group">
											<label htmlFor="otherInterests" className="text-uppercase">Other Interests</label>
											<textarea className="form-control" placeholder="" value={this.state.interests} onChange={(e) => this.setState({ interests: e.target.value })} />
										</div>
										<br />
										<div className=" form-group text-center">
											<span><button type="button" className="btn btn-default btn-transparent-charcoal" onClick={this.editProfile}>Save</button></span>
											<span><button type="button" className="btn btn-default btn-transparent-charcoal" onClick={() => browserHistory.push('/dashboard')}>Cancel</button></span>
										</div>
									</div>
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

export default UserProfileEdit;
