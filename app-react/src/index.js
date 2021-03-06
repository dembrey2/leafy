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
import UserDetail from './UserDetail'
import JobDetail from './JobDetail'
import EmployerDetail from './EmployerDetail'
import UserSnapshot from './UserSnapshot'
import EmployerSnapshot from './EmployerSnapshot'
import JobSnapshot from './JobSnapshot'
import AddJob from './AddJob'
import CandidateSnapshot from './CandidateSnapshot'
import CandidateDetail from './CandidateDetail'
import './index.css';

window.user = JSON.parse(sessionStorage.getItem('user'))
if (window.user) { window.user = window.user.user }

window.apiHost = 'https://turn-newleaf.herokuapp.com'
// window.apiHost = ''

const isEmployer = (window.user && window.user.role === 'employer')


ReactDOM.render(
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0,0)}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="signin" component={Signin} />
            <Route path="employersignup" component={EmployerSignup} />
            <Route path="seekersignup" component={UserSignup} />
            <Route path="dashboard" component={isEmployer? EmployerDashboard : UserDashboard} />
            <Route path="profile-edit" component={isEmployer ? EmployerProfileEdit : UserProfileEdit} />
            <Route path="profile" component={isEmployer ? EmployerDetail : UserDetail} />
            <Route path="profile/:userId" component={isEmployer ? UserDetail : EmployerDetail} />
            <Route path="jobdetail/:jobId" component={JobDetail} />
            <Route path="usersnapshot" component={UserSnapshot} />
            <Route path="employersnapshot" component={EmployerSnapshot} />
            <Route path="jobsnapshot" component={JobSnapshot} />
            <Route path="addjob" component={AddJob} />
            <Route path="editjob/:jobId" component={AddJob} />
            <Route path="candidatesnapshot" component={CandidateSnapshot} />
            <Route path="candidateprofile/:userId" component={CandidateDetail} />
        </Route>
    </Router>,
    document.getElementById('root')
);
