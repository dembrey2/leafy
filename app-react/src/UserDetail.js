import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class UserDetail extends Component {
    constructor(props) {
		super(props)
      //  this.lookupSkills = this.lookupSkills.bind(this)
		this.state = {
            skills: []
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
        //this.lookupSkills()
		// fetch(window.apiHost + '/api/users/' + window.user.id + '?token=' + window.user.token) 
		fetch(window.apiHost + '/api/users/' + this.props.params.userId)
		.then(response => response.json())
		.then(response => this.setState({...response.user}))
	}
  render() {
    const user = window.user;
    // const snapshot = ''//window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/>
    // const skills = this.state.detail.skills.name.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)

    return (
    <div>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            {user.role === 'employer' ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>Back to Jobs</button> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>}
				<h2 className="text-center"></h2>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="img/bluesquare.png" alt="profile"/>
						<h3>{user.seeker_profile.first_name} {user.seeker_profile.last_name}</h3>
                        <h4>Contact Information</h4>
                        <p>{user.location.name}</p>
                        <p>{user.seeker_profile.phone}</p>
                        <p>{user.seeker_profile.email}</p>
                        <h4>Preferred method of Communication:</h4>
                        <p>{user.about}</p>
                        <h4>Skill Sets</h4>
                        <div>{user.seeker_profile.skills.name}</div>
                        <h4>Work, Education, Etc</h4>
                        <p>{user.seeker_profile.education}</p>
                        <p>{user.seeker_profile.workHistory}</p>
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
