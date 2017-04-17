import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'
import UserSnapshot from './UserSnapshot'
import CandidateSnapshot from './CandidateSnapshot'

class JobDetail extends Component {
    constructor(props) {
        super(props)

        this.lookupJob = this.lookupJob.bind(this)
        this.state = {
            skills: [],
            matched_seekers: []
        }
    }

    componentWillMount() {
        this.lookupJob()
    }

    lookupJob() {
		fetch(window.apiHost + '/api/users/' + window.user.id + '/jobs/' + this.props.params.jobId + '?token=' + window.user.token)
		.then(function(response) {
            // console.log(response)
				return response.json();
			})
		.then((response) => {
				this.setState({...response.job})
			})
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

  render() {
       const matchedCandidates = this.state.matched_seekers.map(matchedCandidate => <CandidateSnapshot key={matchedCandidate.id} {...matchedCandidate} />)

      const skills = this.state.skills.map(skill => <div className="label label-default" key={skill.id}>{skill.name}</div>)
    return (
    <div>
        <div className="row">
			{window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/> }
            <div className="col-sm-8 col-sm-offset-2">
            <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        {/*<img src="https://unsplash.it/200/?random" alt="profile logo"/>*/}
						<h3>{this.state.title}</h3>
						<h4>{this.state.company_name}</h4>
                        <h4>{this.state.description}</h4>
                        <p>{this.state.contact_name}</p>
                        <p>{this.state.phone}</p>
                         <div>skills: {skills}</div>
                         <br/>
                         {window.user.role === 'employer' ? '' : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/profile/' + this.state.user_id)}>View employer profile</button> }
                    </div>
                </div>
            </div>
        </div>
        {window.user.role === 'employer' ?
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <h3>Matches</h3>
                    {matchedCandidates}
            </div>
        </div>
        : '' }
    </div>  
        
    );
  }
}

export default JobDetail;