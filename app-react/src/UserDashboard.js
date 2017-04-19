import React, { Component } from 'react';
import UserSnapshot from './UserSnapshot'
import JobSnapshot from './JobSnapshot'
import { browserHistory } from 'react-router';


class UserDashboard extends Component {
  componentWillMount() {
  if (!window.user.token) {
     location.href = '/'
   }
  }
  render() {
    const matchedJobs = window.user.seeker_profile.matched_jobs.map(matchedJob => <JobSnapshot key={matchedJob.id} {...matchedJob} isEmployer={false} />)

    return (
      <div>
        <UserSnapshot />
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h3 className="text-center text-uppercase">Jobs</h3>
            {matchedJobs.length === 0 ? 
              <div className="panel panel-default">
                <div className="panel-body">
                  <button type="button" className="btn btn-default btn-transparent-charcoal text-center btn-lg" onClick={() => browserHistory.push('/profile-edit')}>Click to edit your profile to view your job matches</button> 
                </div>
              </div>
            
            : {matchedJobs}}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
