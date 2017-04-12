import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'
import JobSnapshot from './JobSnapshot'
import UserSnapshot from './UserSnapshot'


class JobMatches extends Component {
  render() {
    return (
        <div>
            <EmployerSnapshot/>
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2">
                <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>
				<h2 className="text-center">User Matches</h2>
				<JobSnapshot isEmployer={true}/>
                <UserSnapshot isEmployer={true}/>
                <UserSnapshot isEmployer={true}/>
                <UserSnapshot isEmployer={true}/>
						
					</div>
                </div>
            </div>
        
        
    );
  }
}

export default JobMatches;
