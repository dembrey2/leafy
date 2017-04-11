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
			<div className="col-sm-8 col-sm-offset-2">
				<h2 className="text-center">Job Matches</h2>
				<div className="panel panel-default">
					<div className="panel-body">
					<table className="table">
						<tbody>
							<tr>
								<td>Job Title Posting</td>
								<td>3 Matches</td>
								<td><button type="button" className="btn btn-default" onClick={() => browserHistory.push ('/jobmatches')}>View</button></td>
							</tr>
							<tr>
								<td>Job Title Posting</td>
								<td>3 Matches</td>
								<td><button type="button" className="btn btn-default" onClick={() => browserHistory.push ('/jobmatches')}>View</button></td>
							</tr>
							<tr>
								<td>Job Title Posting</td>
								<td>3 Matches</td>
								<td><button type="button" className="btn btn-default" onClick={() => browserHistory.push ('/jobmatches')}>View</button></td>
							</tr>
						</tbody>
				</table>
				</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2">
				<h2 className="text-center">Current Job Postings</h2>
				<button type="button" className="btn btn-default" onClick={() => browserHistory.push ('/addjob')}>Add New Job</button>
					{currentJobs}
				</div>
			</div>
		</div>
    );
  }
}

export default EmployerDashboard;
