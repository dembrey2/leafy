import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class CandidateDetail extends Component {
    // constructor(props) {
	// 	super(props)
    //     // this.lookupSkills = this.lookupSkills.bind(this)
    //     // this.lookupLocations = this.lookupLocations.bind(this)
	// 	// this.state = {
    //     //     seeker_profile: {
    //     //         preferred_contact: '',
    //     //         skills: []
    //     //     },
    //     //     location: ''
	// 	// }
	// }

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
		.then(response => this.setState({...response.user}))
	}
  render() {
    const user = window.user;
    // const snapshot = ''//window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/>
    const skills = this.props.seeker_profile.skills.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)

    return (
    <div>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            {user.role === 'employer' ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>Back to Jobs</button> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>}
				<h2 className="text-center"></h2>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="/img/bluesquare.png" alt="profile"/>
						<h3>{this.props.first_name} {this.props.last_name}</h3>
                        <h4>Contact Information</h4>
                        <p>{this.props.location}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.email}</p>
                        <h4>Preferred method of Communication:</h4>
                        <p>{this.props.preferred_contact}</p>
                        <p>{this.props.about}</p>
                        <h4>Skill Sets</h4>
                        <div>{skills}</div>
                        <h4>Work, Education, Etc</h4>
                        <p>{this.props.education}</p>
                        <p>{this.props.work_history}</p>
                        <p>{this.props.interests}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default CandidateDetail;
