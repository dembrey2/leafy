import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.addSkill = this.addSkill.bind(this)
		this.editProfile = this.editProfile.bind(this)
		this.lookupSkills = this.lookupSkills.bind(this)

		this.state = {
			email: window.user.seeker_profile.email,
			phone: window.user.seeker_profile.phone,
			skills: window.user.seeker_profile.skills.map(skill => skill.id),
			communication: window.user.communication,
			education: '',
			work_history: '',
			interests: '',
			lookupSkills: [],
			about: window.user.about
		}
	 }

	 componentWillMount(){
		 this.lookupSkills()

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
		fetch(window.apiHost + '/api/users/' + window.user.id , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
			token: window.user.token,
            user: {
				seeker_profile_attributes: {
					id: window.user.seeker_profile.id,
					email: this.state.email,
					phone: this.state.phone,
					communication: this.state.communication,
					skills: this.state.skills,
					education: this.state.education,
					work_history: this.state.workHistory,
					interests: this.state.interests
				},
				about: this.state.about,
            }
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
			browserHistory.push('/dashboard')
        })
	}

  render() {
	  const skills = this.state.lookupSkills.map(skill => (
		  	<label className="checkbox" key={skill.id}>
				<input type="checkbox" value={skill.id} checked={this.state.skills.includes(skill.id)} onChange={this.addSkill} /> {skill.name}
			</label>
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
							<label htmlFor="communication">Preferred method of communication:</label>
							<select className="form-control" value={this.state.communication} onChange={(e) => this.setState({communication: e.target.value})}>
								<option>Phone</option>
								<option>Email</option>
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
							<textarea className="form-control"  placeholder="" value={this.state.education} onChange={(e) => this.setState({education: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="workHistory">Work History</label>
							<textarea className="form-control"  placeholder="" value={this.state.work_history} onChange={(e) => this.setState({workHistory: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="otherInterests">Other Interests</label>
							<textarea className="form-control"  placeholder="" value={this.state.interests} onChange={(e) => this.setState({interests: e.target.value})}/>
						</div>
						<br/>
						<div className="form-group text-center"><button type="button" className="btn btn-default" onClick={this.editProfile}>Save</button></div>
					
		
	
	</div>
					
					</div>
				</div>
				
						
    );
  }
}

export default UserProfileEdit;
