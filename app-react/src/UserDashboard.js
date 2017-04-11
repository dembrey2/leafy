import React, { Component } from 'react';
import UserSnapshot from './UserSnapshot'
import JobSnapshot from './JobSnapshot'

class UserDashboard extends Component {
  // componentWillMount() {
  // if (!window.user.token) {
  //    location.href = '/'
  //  }
  // }
  render() {
    const matchedJobs = window.user.seeker_profile.matched_jobs.map(matchedJob => <JobSnapshot key={matchedJob.id} {...matchedJob} isEmployer={false} />)

    return (
      <div>
        <UserSnapshot />
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h3 className="text-center">Available Jobs</h3>
            {matchedJobs}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
