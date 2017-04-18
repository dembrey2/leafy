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

    const skills = this.state.user.seeker_profile.skills.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)

    return (
    <div>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
           <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Jobs</button>
				<h2 className="text-center"></h2>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="/img/bluesquare.png" className="img-cirlce" alt="profile"/>
						<h3>{user.seeker_profile.first_name} {user.seeker_profile.last_name}</h3>
                        <h4>Contact Information</h4>
                        <p>{user.location.name}</p>
                        <p>{user.seeker_profile.phone}</p>
                        <p>{user.seeker_profile.email}</p>
                        <h4>Preferred method of Communication:</h4>
                        <p>{user.seeker_profile.preferred_contact}</p>
                        <p>{user.about}</p>
                        <h4>Skill Sets</h4>
                        <div>{skills}</div>
                        <h4>Work, Education, Etc</h4>
                        <p>{user.seeker_profile.education}</p>
                        <p>{user.seeker_profile.work_history}</p>
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
