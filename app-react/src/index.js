import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import Home from './Home'
import UserSignup from './UserSignup'
import EmployerSignup from './EmployerSignup'
import Signin from './Signin'
import UserDashboard from './UserDashboard'
import UserProfileEdit from './UserProfileEdit'
import EmployerDashboard from './EmployerDashboard'
import EmployerProfileEdit from './EmployerProfileEdit'
import JobMatches from './JobMatches'
import UserDetail from './UserDetail'
import JobDetail from './JobDetail'
import EmployerDetail from './EmployerDetail'
import UserSnapshot from './UserSnapshot'
import EmployerSnapshot from './EmployerSnapshot'
import JobSnapshot from './JobSnapshot'
import AddJob from './AddJob'
import './index.css';

window.user = JSON.parse(sessionStorage.getItem('user'))
if (window.user) {window.user = window.user.user}

// window.apiHost = 'https://glacial-wave-69316.herokuapp.com'
window.apiHost = ''

const isEmployer = (window.user && window.user.role === 'employer')

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
		<Route path="/signin" component={Signin} />
		<Route path="/signup" component={isEmployer ? EmployerSignup : UserSignup} />
    <Route path="/dashboard" component={isEmployer ? EmployerDashboard : UserDashboard} />
    <Route path="/profile-edit" component={isEmployer ? EmployerProfileEdit : UserProfileEdit} />
    <Route path="/jobmatches" component={JobMatches} />
    <Route path="/profile/:userId" component={isEmployer? EmployerDetail : UserDetail} />
    <Route path="/jobdetail/:jobId" component={JobDetail} />
    <Route path="/usersnapshot" component={UserSnapshot} />
    <Route path="/employersnapshot" component={EmployerSnapshot} />
    <Route path="/jobsnapshot" component={JobSnapshot} />
    <Route path="/addjob" component={AddJob} />
    <Route path="/editjob/:jobId" component={AddJob} />
    

      </Route>
 </Router>,
  document.getElementById('root')
);
