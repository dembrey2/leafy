import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'
import JobSnapshot from './JobSnapshot'

class EmployerDashboard extends Component {
  render() {
	  const currentJobs = window.user.employer_profile.jobs.map(currentJob => <JobSnapshot key={currentJob.id} {...currentJob} isEmployer={true} />)
    return (
			<div>
				<EmployerSnapshot isEmployer={true} />
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3 text-center">
						{/*<h2 className="text-center text-uppercase white">Current Job Postings</h2>*/}
						<br />
						{currentJobs.length === 0 ? <button type="button" className="btn btn-default btn-transparent-white-background" onClick={() => browserHistory.push('/addjob')}><span className="glyphicon glyphicon-plus"></span><br />Add a job</button> : <button type="button" className="btn btn-default btn-transparent-white-background" onClick={() => browserHistory.push('/addjob')}>Add a Job</button>}
						<br /><br />
						<div className="text-left">{currentJobs}</div>
					</div>
				</div>
			</div>
    );
  }
}

export default EmployerDashboard;