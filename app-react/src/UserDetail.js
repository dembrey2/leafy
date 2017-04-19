import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class UserDetail extends Component {
    constructor(props) {
		super(props)
        // this.lookupSkills = this.lookupSkills.bind(this)
		this.state = {
            seeker_profile: {
                preferred_contact: '',
                skills: []
            },
            location: ''
		}
	}

    // lookupSkills() {
	// 	fetch(window.apiHost + '/api/skills')
	// 	.then(function(response) {
	// 			return response.json();
	// 		})
	// 	.then((response) => {
	// 			this.setState({lookupSkills:response.skills})
	// 		})
	//  }

	componentWillMount() {
        // this.lookupSkills()
		fetch(window.apiHost + '/api/users/' + window.user.id + '?token=' + window.user.token) 
		//fetch(window.apiHost + '/api/users/' + this.props.params.userId)
		// fetch(window.apiHost + '/api/users/' + window.user.id)
		.then(response => response.json())
		.then(response => this.setState({...response.user}))
	}
  render() {
    const user = window.user;
    // const snapshot = ''//window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/>
    const skills = this.state.seeker_profile.skills.map(skill => <div key={skill.id}>{skill.name}<br/></div>)

    return (
    <div>
        <div className="row">
			<div className="col-sm-6 col-sm-offset-3">
            {user.role === 'employer' ? <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/jobmatches')}>Back to Jobs</button> : <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>}
				<h2 className="text-center"></h2>
				<div className="panel panel-default">
            		<div className="panel-body text-center">
                        <img src={user.avatar.url} className="img-circle" alt="profile"/>
						<h3 className="text-uppercase">{user.seeker_profile.first_name} {user.seeker_profile.last_name}</h3>
                        <p>{user.about}</p>
                        <hr/>
                        <h4 className="text-uppercase">Contact Information</h4>
                        <p>Phone: {user.seeker_profile.phone}</p>
                        <p>Email: {user.seeker_profile.email}</p>
                        <p>Location: {user.location.name}</p>
                        <p>Preferred Contact: {user.seeker_profile.preferred_contact}</p>
                        <hr/>
                        <h4 className="text-uppercase">Skill Sets</h4>
                        <div>{skills}</div>
                        <hr/>
                        <h4 className="text-uppercase">Education</h4>
                        <p>{user.seeker_profile.education}</p>
                        <hr/>
                        <h4 className="text-uppercase">Work History</h4>
                        <p>{user.seeker_profile.work_history}</p>
                        <hr/>
                        <h4 className="text-uppercase">Other Interests</h4>
                        <p>{user.seeker_profile.interests}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default UserDetail;
