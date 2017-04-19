import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class CandidateDetail extends Component {
    constructor(props) {
		super(props)
        // this.lookupSkills = this.lookupSkills.bind(this)
        // this.lookupLocations = this.lookupLocations.bind(this)
		this.state = {
            user: {
                seeker_profile: {
                    first_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                    preferred_contact: '',
                    skills: []
                },
                about: '',
                location: ''
            }
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
		fetch(window.apiHost + '/api/users/' + this.props.params.userId + '?token=' + window.user.token) 
		//fetch(window.apiHost + '/api/users/' + this.props.params.userId)
		// fetch(window.apiHost + '/api/users/' + window.user.id)
		.then(response => response.json())
		.then(response => this.setState({...response}))
	}
  render() {
    let user;
        if (this.props.params.userId) {
            user = this.state.user;
        }

    const skills = this.state.user.seeker_profile.skills.map(skill => <div key={skill.id}>{skill.name}</div>)

    return (
    <div>
        <div className="row">
			<div className="col-sm-6 col-sm-offset-3">
           <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/dashboard')}>Back to dashboard</button>
				<h2 className="text-center"></h2>
				<div className="panel panel-default">
            		<div className="panel-body text-center">
                        <img src={user.avatar} className="img-cirlce" alt="profile"/>
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

export default CandidateDetail;
