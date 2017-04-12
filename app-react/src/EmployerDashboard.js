import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'
import JobSnapshot from './JobSnapshot'

class EmployerDashboard extends Component {
  render() {
	  const currentJobs = window.user.employer_profile.jobs.map(currentJob => <JobSnapshot key={currentJob.id} {...currentJob} isEmployer={true} />)
    return (
      <div>
        <EmployerSnapshot isEmployer={true}/>
		<div className="row">
		</div>
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 text-center">
				<h2 className="text-center">Current Job Postings</h2>
				<br/>
				<button type="button" className="btn btn-default" onClick={() => browserHistory.push ('/addjob')}>Add New Job</button>
				<br/><br/>
					{currentJobs}
				</div>
			</div>
		</div>
    );
  }
}

export default EmployerDashboard;