import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class EmployerDetail extends Component {
  render() {
      const user = window.user;
    return (
    <div>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <p>employer detail</p>
                        <img src="/img/redsquare.png" alt="profile"/>
						<h3>{user.employer_profile.company_name}</h3>
                        <h4>{user.employer_profile.contact_name}</h4>
                        <p>{user.employer_profile.contact_phone}</p>
                        <p>{user.employer_profile.contact_email}</p>
                        <p>{user.about}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default EmployerDetail;
