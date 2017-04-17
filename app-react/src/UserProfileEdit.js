import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.addSkill = this.addSkill.bind(this)
		this.editProfile = this.editProfile.bind(this)
		this.lookupSkills = this.lookupSkills.bind(this)
		this.lookupLocations = this.lookupLocations.bind(this)

		this.state = {
			email: window.user.seeker_profile.email || '',
			phone: window.user.seeker_profile.phone || '',
			skills: window.user.seeker_profile.skills.map(skill => skill.id),
			preferred_contact: window.user.preferred_contact || 'email',
			location: window.user.location.id,
			education: window.user.seeker_profile.education || '',
			work_history: window.user.seeker_profile.work_history || '',
			interests: window.user.seeker_profile.interests || '',
			lookupSkills: [],
			lookupLocations: [],
			about: window.user.about || '',
		}
	 }

	 componentWillMount(){
		 this.lookupSkills()
		 this.lookupLocations()

		//  fetch(window.apiHost + '/api/users/' + window.user.id)
		// .then(response => response.json())
		// .then(response => this.setState({
		// 	skills: response.user.skills.map(skill => skill.id),
		// 	email: response.user.email,
		// 	phone: response.user.phone,
		// 	communication: response.user.communication,
		// 	about: response.user.about,
		// 	education: response.user.education,
		// 	work_history: response.user.workHistory,
		// 	interests: response.user.interests
		// }))
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
		data.append('user[avatar]', this.state.avatar)

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
		const locations = this.state.lookupLocations.map(location => (
			<option key={location.id} value={location.id}>{location.name}</option>
		))

    return (
    <div>
        <h3>Edit Profile</h3>
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="form-group">
							<label htmlFor="email"> Email (optional)</label>
							<input type="text" className="form-control" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input type="text" className="form-control"  name="phone" placeholder="" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Photo Upload:</label>
							<input type="file" className="form-control"  onChange={(e) => this.setState({avatar: e.target.files[0]})}/>
						</div>
						<div className="form-group">
							<label htmlFor="preferred_contact">Preferred method of communication:</label>
							<select className="form-control" value={this.state.preferred_contact} onChange={(e) => this.setState({preferred_contact: e.target.value})}>
								<option value="phone">Phone</option>
								<option value="email">Email</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="location">Location:</label>
							<select className="form-control" value={this.state.location} onChange={(e) => this.setState({location: e.target.value})}>
								{locations}
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="about">About</label>
							<textarea className="form-control"  placeholder="" value={this.state.about} onChange={(e) => this.setState({about: e.target.value})}/>
						</div>
						</div>
						</div>
						<h3>Skills and Abilities</h3>
						<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
							<div className="row">
								{skills}
							</div>
						</div>
				</div>

					<h3>Work History/Education <br/>(Optional)</h3>
					
					<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="form-group">
							<label htmlFor="education">Education</label>
							<textarea className="form-control"  value={this.state.education} onChange={(e) => this.setState({education: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="workHistory">Work History</label>
							<textarea className="form-control" value={this.state.work_history} onChange={(e) => this.setState({work_history: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="otherInterests">Other Interests</label>
							<textarea className="form-control"  placeholder="" value={this.state.interests} onChange={(e) => this.setState({interests: e.target.value})}/>
						</div>
						<br/>
						<div className=" form-group text-center">
						<span><button type="button" className="btn btn-default" onClick={this.editProfile}>Save</button></span>
						<span><button type="button" className="btn btn-default" onClick={() => browserHistory.push('/dashboard')}>Cancel</button></span>
						</div>
					
		
	
	</div>
					
					</div>
				</div>
				
						
    );
  }
}

export default UserProfileEdit;
