import React, { Component } from 'react';
import { browserHistory } from 'react-router'
// import EmployerSnapshot from './EmployerSnapshot'
// import UserSnapshot from './UserSnapshot'
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
            console.log(response)
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

      const skills = this.state.skills.map(skill => <div key={skill.id}>{skill.name}</div>)
    return (
    <div>
        <div className="row">
			{/*{window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/> }*/}
            <div className="col-sm-6 col-sm-offset-3">
            <button type="button" className="btn btn-default btn-transparent-white-background text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <div className="col-sm-6">
                            <h4 className="text-uppercase bold-heading">{this.state.title}</h4>
						    <h4>{this.state.company_name}</h4>
                            {window.user.role === 'employer' ? '' : <button type="button" className="btn btn-default btn-sm btn-transparent-white-background text-center" onClick={() => browserHistory.push('/profile/' + this.state.user_id)}>View profile</button> }
                            
                            <h5>{this.state.contact_name}</h5>
                            <div>{this.state.contact_phone}</div>
                            <div>{this.state.contact_email}</div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bold-heading text-uppercase">About </div>
                            <div>{this.state.description}</div><br/>
                            <div className="bold-heading text-uppercase">Transportation</div>{this.props.transportation ? 'Provided' : 'Not provided'}<br/><br/>
                            <div className="bold-heading text-uppercase">Skills Desired</div>
                            <div>{skills}</div>
                            <br/>
                        </div>
						
                        
                    </div>
                </div>
            </div>
        </div>
        {window.user.role === 'employer' ?
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h3 className="text-center text-uppercase">Matches</h3>
                    {matchedCandidates}
                    </div>
                </div>
            </div>
        </div>
        : '' }
        </div>  
        
    );
  }
}

export default JobDetail;